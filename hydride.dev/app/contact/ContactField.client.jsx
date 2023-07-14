"use client";

import Link from "next/link";
import { useRef, useState, useTransition } from "react";
import { BiSmile } from "react-icons/bi";
import { ContactAction } from "./SendContact.server";
import { Turnstile } from "@marsidev/react-turnstile";

export const Field = ({ fieldName, disabled, fieldPlaceholder, id, type, resizeable, weighted, form }) => {
    if (resizeable) return (
        <div className="flex flex-col gap-y-2">
            <label htmlFor={id} className="text-lg font-medium font-header">{fieldName}</label>
            <textarea 
                id={id}
                required
                disabled={disabled}
                placeholder={fieldPlaceholder} 
                className={`${disabled ? "hover:cursor-not-allowed bg-stripes bg-stripes-gray-600" : "bg-transparent"} w-full h-48 px-4 py-2 text-lg placeholder:font-normal font-header ${weighted ? "" : "font-normal"} border-[1.5px] border-gray-600 rounded-md bg-transparent focus:outline-none focus:ring-[2px] focus:ring-purple-800 focus:border-transparent`}
                onChange={e => form.setForm({ ...form.form, [id]: e.target.value })}
             />
        </div>
    );

    return (
        <div className="flex flex-col gap-y-2">
            <label htmlFor={id} className="text-lg font-medium font-header">{fieldName}</label>
            <input 
                type={type || "text"}
                required
                id={id} 
                disabled={disabled}
                placeholder={fieldPlaceholder} 
                className={`${disabled ? "hover:cursor-not-allowed bg-stripes bg-stripes-gray-600" : "bg-transparent"} w-full h-12 px-4 text-lg font-medium placeholder:font-normal font-header ${weighted ? "" : "font-normal"} border-[1.5px] border-gray-600 rounded-md focus:outline-none focus:ring-[2px] focus:ring-purple-800 focus:border-transparent`}
                onChange={e => form.setForm({ ...form.form, [id]: e.target.value })}
            />
        </div>
    );
};

export const Dropdown = ({ fieldName, fieldPlaceholder, id, children, form }) => {
    return (
        <div className="flex flex-col gap-y-2">
            <label htmlFor={id} className="text-lg font-medium font-header">{fieldName}</label>
            <select 
                id={id} 
                className={`bg-neutral-900 w-full h-12 px-4 text-lg ${form.form?.[id] == "" ? "font-normal" : "font-medium"} placeholder:font-normal font-header border-[1.5px] border-gray-600 rounded-md bg-transparent focus:outline-none focus:ring-[2px] focus:ring-purple-800 focus:border-transparent`}
                onChange={e => {
                    if (e.target.value == "") return form.setForm({ ...form.form, [id]: "" });
                    form.setForm({ ...form.form, [id]: e.target.value })
                }}
            >
                {
                    children
                }
            </select>
        </div>
    );
};

export const Option = ({ value, children, className }) => {
    return (
        <option value={value} className={`bg-neutral-900 ${className}`}>
            {children}
        </option>
    )
}

export const ContactField = () => {
    const [ isPending, startTransition ] = useTransition();
    const [ turnstile, setTurnstile ] = useState(null);
    const turnstileRef = useRef(null);
    const [ form, setForm ] = useState({
        name: "",
        email: "",
        subject: "",
        service: "",
        message: ""
    });
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex flex-row gap-x-4">
                <Field fieldName="Your name" fieldPlaceholder="Person" id="name" form={{ form, setForm }} />
                <Field fieldName="Email address" fieldPlaceholder="person@tuta.io" id="email" type="email" form={{ form, setForm }} />
            </div>
            <Dropdown fieldName="Topic (what is this enquiry about?)" id="subject" form={{ form, setForm }}>
                <Option value="">Select an option..</Option>
                <Option value="freelance">I&apos;d like to hire Hydride for a service</Option>
                <Option value="suggestion">I&apos;m submitting a suggestion</Option>
                <Option value="business">I have a business-related enquiry</Option>
                <Option value="apply">I&apos;m interested in joining the team</Option>
                <Option value="other">I need to contact the team about something else</Option>
                <Option value="hello">I just want to say hello!</Option>
            </Dropdown>
            {
                form.subject === "freelance" && (
                    <Dropdown fieldName="What service are you looking to hire us for?" id="service" form={{ form, setForm }}>
                        <Option value="">Select an option..</Option>
                        <Option value="webui">Web/UI design & development</Option>
                        <Option value="sysadmin">Hydrabank (sys-admin)</Option>
                        <Option value="software">Software/backend development</Option>
                        <Option value="other">Something else</Option>
                    </Dropdown>
                )
            }
            {
                form.subject === "apply" ? (
                    <span className="text-xl mt-6 max-w-[30rem]">
                        Hello! We&apos;re delighted that you&apos;re interested in joining the team. <br /><br />
                        Unfortunately, we&apos;re not currently looking for any new members to join the collective at this time.
                        If you believe that there is reason otherwise for you to join us, please email us at {" "}
                        <Link href="mailto:admin@hydride.space" target="_blank" rel="noreferrer noopener" className="font-medium hover:text-gray-300 hover:underline">
                            admin@hydride.space
                        </Link>
                        {" "} in order to discuss career opportunities.
                    </span>
                ) : form.subject === "hello" ? (
                    <span className="text-xl mt-6 max-w-[30rem]">
                        Hi there, we&apos;re glad you&apos;re checking out our website. 
                        Unfortunately, we can&apos;t respond to every hello we get, but <b>we appreciate the gesture</b>.
                        <br /><br />
                        Thank you for your interest! <BiSmile className="inline-block text-2xl" />
                    </span>
                ) : (
                    <>
                        <Field disabled={form.subject == "" || (form.subject === "freelance" && form.service === "")} fieldName="Message" fieldPlaceholder="Hi there! I was wondering.." id="message" resizeable weighted form={{ form, setForm }} />
                        <Turnstile ref={turnstileRef} siteKey={process.env.NEXT_PUBLIC_TURNSTILE} 
                            onSuccess={setTurnstile} 
                            onExpire={() => {
                                setTurnstile(null);
                                turnstileRef.current.reset();
                            }}
                            onError={() => {
                                console.log("Error occurred while verifying turnstile.");
                                setTurnstile(null);
                                //turnstileRef.current.reset();
                            }}
                        />
                        <div className="flex flex-row items-center w-full justify-end">
                            <button
                                onClick={async () => {
                                    if (isPending) return;
                                    //if (turnstile == null) return alert("Please complete the verification challenge.");
                                    //if (turnstile == false) return alert("Please complete the verification challenge.");
                                    startTransition(() => ContactAction(form, turnstile).then((r) => {
                                        if (!r.success) {
                                            setTurnstile(null);
                                            turnstileRef.current.reset();
                                        }
                                        alert(r.response);
                                    }).catch(e => {
                                        alert("An error occurred while sending your message. Please try again later.");
                                    }));
                                }}
                                className={`${turnstile === null ? "bg-stripes bg-stripes-gray-600 hover:cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"} w-full px-4 py-2 font-medium font-header text-base uppercase tracking-widest rounded-md`}
                            >
                                Contact us
                            </button>
                        </div>
                    </>
                )
            }
        </div>
    );
};
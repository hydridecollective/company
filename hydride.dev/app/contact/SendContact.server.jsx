"use server";
export const ContactAction = async (s = {}, turnstile) => {
    const { name, email, subject, service, message, } = s;
    if (name === "" || !name || email === "" || !email || subject === "" || !subject || message === "" || !message) {
        return {
            status: 400,
            message: "Please fill out all required fields."
        }
    };

    const contactResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/contact/send`, {
        cache: "no-cache",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            subject,
            service,
            message,
            turnstile
        }),
    }).then((r) => {
        if (r.status === 429) {
            return {
                status: 429,
                response: "Too Many Requests: We're currently receiving a high volume of requests. Please try again later."
            };
        } else {
            return r.json();
        };
    }).catch((e) => {
        console.log(e)
        return {
            status: 500,
            response: "An error occurred while sending your message."
        };
    });

    return contactResponse;
};
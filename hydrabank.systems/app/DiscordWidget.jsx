"use client";

import { useState } from "react";
import { FaDiscord } from "react-icons/fa";

const DiscordWidget = () => {
    const [open, setOpen] = useState();
    return (
        <>   
            <div className="discord-button" onClick={() => setOpen(!open)}>
                <FaDiscord className="w-8 h-8" />
            </div>

            <div className={`discord-dialog ${open && 'discord-dialog--active'}`}>
                <div className="discord-dialog__header">
                    <a href="https://discordapp.com">
                        <svg className="discord-dialog__logo" viewBox="0 0 532 130"><path d="M53.2,20.3H20v37.6l22.1,20V41.4H54c7.5,0,11.2,3.7,11.2,9.5v27.9c0,5.8-3.5,9.7-11.2,9.7H20v21.2h33.2  c17.8,0.1,34.5-8.8,34.5-29.4V50.2C87.7,29.4,71,20.3,53.2,20.3z M227.3,80.4V49.6c0-11.1,19.8-13.7,25.8-2.5l18.3-7.5  C264.3,23.7,251.1,19,240.2,19c-17.8,0-35.4,10.4-35.4,30.6v30.8c0,20.3,17.6,30.6,35,30.6c11.2,0,24.6-5.6,32-20.1l-19.6-9.1  C247.4,94.2,227.3,91.2,227.3,80.4z M166.7,53.8c-6.9-1.5-11.5-4-11.8-8.3c0.4-10.4,16.3-10.7,25.6-0.8l14.7-11.4  C186,22,175.6,19,164.8,19c-16.3,0-32.1,9.2-32.1,26.8c0,17.1,13,26.2,27.3,28.4c7.3,1,15.4,3.9,15.2,9c-0.6,9.6-20.2,9.1-29.1-1.8  L132,94.8c8.3,10.7,19.6,16.2,30.2,16.2c16.3,0,34.4-9.5,35.1-26.8C198.3,62.2,182.5,56.7,166.7,53.8z M99.8,109.7h22.4V20.3H99.8  V109.7z M477.5,20.3h-33.2v37.6l22.1,20V41.4h11.8c7.5,0,11.2,3.7,11.2,9.5v27.9c0,5.8-3.5,9.7-11.2,9.7h-34v21.2h33.2  c17.8,0.1,34.5-8.8,34.5-29.4V50.2C512,29.4,495.3,20.3,477.5,20.3z M314.6,19c-18.4,0-36.7,10.1-36.7,30.7v30.6  c0,20.5,18.4,30.7,36.9,30.7c18.4,0,36.7-10.2,36.7-30.7V49.7C351.5,29.2,333,19,314.6,19z M329,80.3c0,6.4-7.2,9.7-14.3,9.7  c-7.2,0-14.4-3.2-14.4-9.7V49.7c0-6.6,7-10.1,14-10.1c7.3,0,14.7,3.2,14.7,10.1V80.3z M431.8,49.7c-0.5-21-14.7-29.4-33-29.4h-35.5  v89.5h22.7V81.3h4l20.6,28.4h28L414.4,79C425.2,75.6,431.8,66.3,431.8,49.7z M399.2,61.8h-13.2V41.4h13.2  C413.4,41.4,413.4,61.8,399.2,61.8z"/></svg>
                    </a>
                </div>

                <div className="discord-dialog__close-button" onClick={() => setOpen(false)}>
                    <svg viewBox="0 0 24 24">
                    <path fill="#000000" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
                    </svg>
                </div>

                <div className="discord-dialog__container">
                    <img src="https://hop-on-discord.netlify.com/icon.jpg" className="discord-dialog__guild-icon" />
                    <div className="discord-dialog__guild">You're invited to join our Discord server</div>
                    Join our Discord server! If you haven't used Discord before: it's free, secure, and works on both your desktop and phone.
                </div>

                <div className="discord-dialog__footer">
                    <a href="https://discord.hydrabank.systems/" className="discord-dialog__btn">Join the server now</a>
                    <button onClick={() => {
                        alert("A Discord widget!")
                    }} className="discord-dialog__explainer">What is this?</button>
                </div>
            </div>
        </>
    )
}

export default DiscordWidget;
"use client";

import Link from 'next/link';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, { accordionDetailsClasses } from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary, { accordionSummaryClasses } from '@mui/joy/AccordionSummary';

export const ClosingFAQ = () => {
    return (
        <AccordionGroup
            disableDivider variant="outlined"
            transition="0.2s"
            sx={{
                marginTop: '1rem',
                borderRadius: 'lg',
                [`& .${accordionSummaryClasses.button}`]: {
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                },
                [`& .${accordionDetailsClasses.content}`]: {
                    [`&.${accordionDetailsClasses.expanded}`]: {
                        paddingBlock: '0.75rem',
                    },
                },
            }}
        >
            <Accordion>
                <AccordionSummary>
                    <span className="text-white text-lg">
                        Why are you closing?
                    </span>
                </AccordionSummary>
                <AccordionDetails>
                    <p className="text-base font-medium text-white">
                        In recent months, we at Hydride have pivoted our focus toward our design and development consultancy services 
                        (including our small business outreach programmes). This has resulted in a major shift in resources, previously
                        allocated to IaaS and infrastructure.
                        This, along with our fundamental lack of understanding for the clients we served, led to our decision to wind-down
                        and close new onboarding for our IaaS and infrastructure services.
                        <br />
                        <br />
                        We are still committed to supporting existing clients at Hydride Infrastructure
                        for the foreseeable future.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <span className="text-white text-lg">
                        I&apos;m a client already working with Hydrabank. What happens now?
                    </span>
                </AccordionSummary>
                <AccordionDetails>
                    <p className="text-base font-medium text-white">
                        Clients with existing contracts continue to be supported under the Hydride Infrastructure umbrella of services.
                        For more information, contact your account manager.
                        <br />
                        <br />
                        If you don&apos;t have an account manager or know who your account manager is,
                        {" "}
                        <Link href="https://hydride.dev/contact" className="text-orange-500 hover:text-orange-600 hover:underline">contact us</Link>.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>
                    <span className="text-white text-lg">
                        I previously worked with Hydrabank. Can I still be accomodated?
                    </span>
                </AccordionSummary>
                <AccordionDetails>
                    <p className="text-base font-medium text-white">
                        We may still be able to accomodate you at Hydride Infrastructure. <Link href="https://hydride.dev/contact" className="text-orange-500 hover:text-orange-600 hover:underline">Contact us</Link> to discuss your options.
                    </p>
                </AccordionDetails>
            </Accordion>
        </AccordionGroup>
    )
};
import Link from "next/link";

export default function Page() {
	return (
		<section className="flex flex-col gap-y-6 w-full h-full p-16 pt-16">
			<div className="flex flex-col gap-y-2">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-header lg:max-w-[72rem] mb-4">
					<b className="bg-gradient-to-r text-orange-500">
						Terms of Service
					</b>
				</h1>
				<div className="flex flex-col md:gap-y-4">
					<h3>
						<span className="text-red-300 text-lg font-header font-medium">
							<strong>Effective Date: July 17th, 2023</strong>
						</span>
					</h3>
					<p>
						These Terms of Service (&quot;Terms&quot;) govern your use of the services provided by Hydride (the &quot;Collective&quot;) through Hydrabank, including the system administration services provided by Hydrabank (&quot;Hydrabank&quot;). Please read these Terms carefully before using our services.
					</p>
					<h3 className="text-lg font-bold text-white">1. Acceptance of Terms</h3>
					<p>
						By accessing or using the services provided by Hydrabank, you agree to be bound by these Terms. If you do not agree to these Terms, you may not order our services.

						All intellectual property rights related to the services provided by Hydrabank or Hydride, including (but not limited to) software, documentation, and any custom configurations, remain the property of Hydride or its licensors.
					</p>
					<h3 className="text-lg font-bold text-white">2. Intellectual Property</h3>
					<p>
						All intellectual property rights related to the services provided by Hydrabank or Hydride, including (but not limited to) software, documentation, and any custom configurations, remain the property of Hydride or its licensors.
					</p>
					<h3 className="text-lg font-bold text-white">3. Services</h3>
					<h3 className="text-md font-medium text-white">3.1 Systems administration</h3>
					<p>
						Hydride provides systems administration services through its subsidiary, Hydrabank. These services include, but are not limited to, server management, network administration, security audits, and advice on best practices.
					</p>
					<h3 className="text-md font-medium text-white">3.2 Cloud infrastructure provisioning</h3>
					<p>
						Hydride provides cloud infrastructure provisioning through its subsidiary, Hydrabank. These services include, but are not limited to, selling cloud infrastructure solutions.
					</p>
					<h3 className="text-md font-medium text-white">3.3 Your Compliance with Security Protocols</h3>
					<p>
						Hydrabank strongly recommends that you follow our security protocols, including enabling two-factor authentication &quot;2FA&quot; and implementing our recommended security measures. While we strive to provide secure services, we cannot be held responsible for breaches or security incidents resulting from your failure to implement these protocols unless it can be proven to be our fault.
					</p>
					<h3 className="text-lg font-bold text-white">4. Payments and Refunds</h3>
					<h3 className="text-md font-medium text-white">4.1 Payment</h3>
					<p>
						You agree to pay the fees for the services provided by Hydride through Hydrabank as outlined in the agreed-upon service agreement. Payment terms and methods will be specified in the agreement.
					</p>
					<h3 className="text-md font-medium text-white">4.2 No Refunds or Chargebacks</h3>
					<p>
						Once the services have been completed, refunds or chargebacks will not be permitted unless otherwise agreed upon in writing between you and the Collective. It is your responsibility to review and confirm the completion of services before making the final payment.            </p>
					<h3 className="text-lg font-bold text-white">5. Limitation of Liability</h3>
					<p>
						To the maximum extent permitted by law, Hydride, its managers, directors, employees, and affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, including but not limited to damages for loss of profits, data, or business.
					</p>
					<h3 className="text-lg font-bold text-white">6. Governing Law and Jurisdiction</h3>
					<p>
						These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of laws principles. Any disputes arising out of or relating to these Terms or the services provided by Hydride through Hydrabank shall be exclusively resolved in the state and federal courts located in California.            </p>
					<h3 className="text-lg font-bold text-white">7. Miscellaneous</h3>
					<h3 className="text-md font-medium text-white">7.1 Entire Agreement</h3>
					<p>
						These Terms constitute the entire agreement between you and Hydride regarding the use of our services and supersede any prior agreements or understandings.
					</p>
					<h3 className="text-md font-medium text-white">7.2 Severability</h3>
					<p>
						If any provision of these Terms is found to be invalid or unenforceable, that provision shall be deemed severed from the Terms without affecting the validity and enforceability of the remaining provisions.
					</p>
					<h3 className="text-md font-medium text-white">7.3 Modifications</h3>
					<p>
						Hydrabank reserves the right to modify or update these Terms at any time without prior notice. It is your responsibility to review these Terms periodically for any changes.
					</p>
                    <h3 className="text-lg font-bold text-white">8. Late Invoices & Termination</h3>
                    <h3 className="text-md font-bold text-white">8.1 Late Invoices</h3>
                    <h3 className="text-rg font-bold text-white">a) Payment Schedule:</h3>
                    <p>
                    Clients of Hydrabank are expected to adhere to a timely payment schedule for all services rendered. Late payments can result in significant disruptions to your support and services. 
                    </p>
                    <h3 className="text-rg font-bold text-white">b) External Services:</h3>
                    <p>If your payment is for services provided by external entities, such as hosting from us or third party solutions, it is imperative to meet their payment deadlines. Failure to do so may lead to the following consequences:</p>
                    <p>
                        a) Hosting: If you are utilizing a dedicated server or kvm or any type of hosting from us, failure to make payments will result in the termination of your dedicated server at a said given time. Please note that we will not be held responsible for any data loss that may occur as a result of such termination.
                    </p>
                    <p>
                        b) Mitigation Solutions: Game shield plans must be paid by 8 AM UTC on the next day following the due date. Failure to make timely payments may result in restrictions on your network connections, including the disabling of player connectivity.
                    </p>
                    <h3 className="text-rg font-bold text-white">c) Payments to Hydride:</h3>
                    <p>
                    If you are paying for services directly to Hydride and not relying on external providers, we generally allow a grace period of 2-3 days for late payments, depending on your payment history and the reasons provided for the delay. However, it is crucial to maintain respectful and open communication with us during this time.
                    </p>
                    <h3 className="text-rg font-bold text-white">d) Uncooperative Clients:</h3>
                    <p>
                    Clients who exhibit uncooperative or disrespectful behavior during the payment process may be subject to discussions regarding immediate suspension of services and removal from our systems.
                    </p>
                    <h3 className="text-md font-bold text-white">8.2 Suspension and Contact</h3>
                    <h3 className="text-rg font-bold text-white">a) Seven-Day Unreachability:</h3>
                    <p>
                    If we are unable to reach a client for a period of seven days, we will suspend their services and categorize them as an &ldquo;inactive client.&rdquo; During this time, we will not address any issues, alerts, or system outages that may occur.
                    </p>
                    <h3 className="text-rg font-bold text-white">b) Fourteen-Day Unreachability:</h3>
                    <p>
                    After a client remains uncontactable for a period of 14 days, we will initiate an internal investigation and employ all reasonable means to establish contact. 
                    </p>
                    <h3 className="text-md font-bold text-white">8.3 Reasonable Action</h3>
                    <h3 className="text-rg font-bold text-white">a) Our Approach:</h3>
                    <p>
                    We want to emphasize that our actions are not driven by malice or a desire for confrontation. We maintain access to your systems and take actions only when faced with significant inconvenience or unresponsiveness.
                    </p>
                    <h3 className="text-rg font-bold text-white">b) Case-by-Case Basis:</h3>
                    <p>
                    The extent of our actions in response to late payments or uncooperative behavior is determined on a case-by-case basis. We do not endorse or condone such actions but include this clause due to past instances.
                    </p>
                    <h3 className="text-rg font-bold text-white">c) Rare Occurrence:</h3>
                    <p>
                    It is crucial to note that situations leading to such actions are exceedingly rare, and we make every effort to resolve issues through communication and cooperation before resorting to any restrictions or sanctions.
                    </p>
                    <h3 className="text-lg font-bold text-white">9. Disruption and Malicious Intent</h3>
                    <h3 className="text-md font-bold text-white">9.1 Prohibited Conduct:</h3>
                    <p>
                    Users are strictly prohibited from engaging in any activity that may disrupt or harm our reputation or our Discord community (&ldquo;Community&rdquo;) without providing verifiable and factual evidence to substantiate their claims. Such prohibited conduct includes but is not limited to:
                    </p>
                    <h3 className="text-rg font-bold text-white">a) Disruptive Behavior:</h3>
                    <p>
                    Any deliberate act or behavior that significantly disrupts the normal functioning of our community channels of communication.
                    </p>
                    <h3 className="text-rg font-bold text-white">b) Defamatory Actions:</h3>
                    <p>
                    Any attempt to defame, discredit, or damage the reputation of our Community or its members without valid, fact-based evidence, within our community channels of communication.                    
                    </p>
                    <h3 className="text-rg font-bold text-white">c) Deception of Staff:</h3>
                    <p>
                    Any attempt to deceive our staff, including but not limited to planting honeypots or fail safes within our community channels of communication to create a false impression of unreliability or to dispute a statement.
                    </p>
                    <h3 className="text-rg font-bold text-white">d) Falsified Evidence:</h3>
                    <p>
                    The submission of edited or fabricated evidence within our community channels of communication, including but not limited to screenshot messages, as we maintain comprehensive archives throughout your service.    
                    </p>
                    <h3 className="text-md font-bold text-white">9.2 Consequences of Prohibited Conduct:</h3>
                    <p>
                    Violation of this clause may result in immediate removal from our Discord community and termination of your access to our services, with no entitlement to refunds or compensation.
                    </p>
                    <h3 className="text-md font-bold text-white">9.3 Legal Recourse:</h3>
                    <p>
                    We (&ldquo;Hydride&rdquo;) reserve the right to pursue legal remedies against any user engaged in disruptive or malicious conduct that causes harm to our Community, reputation, or services, without prejudice to any other rights and remedies available to us under applicable law.     
                    </p>
                    <h3 className="text-lg font-bold text-white">10. Direct Message Support</h3>
                    <h3 className="text-md font-bold text-white">10.1 Prohibited Conduct:</h3>
                    <h3 className="text-rg font-bold text-white">a) General Prohibition:</h3>
                    <p>
                    No system administrator or member of the management team shall entertain or respond to any requests via direct messages (DMs), irrespective of the nature of the situation or issue. Submitting requests via DM will not result in the handling of your request. For all non-confidential information or inquiries, please utilize the designated teams-chat channel.
                    </p>
                    <h3 className="text-md font-bold text-white">10.2 Exceptions to the Prohibition:</h3>
                    <p>
                    There are specific exceptions to this prohibition, which are detailed as follows:   
                    </p>
                    <h3 className="text-rg font-bold text-white">a) Addition or Removal of Staff/Owners:</h3>

                    <p>
                         Requests related to adding or removing a staff member or another owner who is part of your network or business shall be considered an exception to this rule. For instance, if the primary owner, John Doe, of the client category &ldquo;p1234&rdquo; requests the removal of Amy from all chats and the alteration of vault passwords, such requests may be made via DM to the system administrator responsible.
                    </p>
                    <h3 className="text-rg font-bold text-white">b) Personal Discussions: </h3>
                    <p>
                        Personal discussions that are unrelated to the operational activities of Hydrabank or Hydride, such as casual conversations between friends or sharing links that have no relevance to your network or business, may also be conducted via DMs. 
                    </p>
                    <h3 className="text-md font-bold text-white">10.3 Compliance Requirement:</h3>
                    <p>
                    Users are obligated to comply with this &ldquo;Direct Messages&rdquo; policy, and any violation may result in no access to our systems.
                    </p>
                    <h3 className="text-lg font-bold text-white">11. Common Courtesy</h3>
                    <h3 className="text-md font-bold text-white">11.1 Ticket and Contact Protocol:</h3>
                    <p>
                    While engaging in communication with us via Discord, it is expected that you refrain from initiating tickets or requests with Service Teams or other freelancers or using alternative contact methods, such as the BuiltByBit forums or similar means, for matters that involve significant conflicts of interest, particularly those related to system administration support. This policy is in place to prevent commission sniping and to maintain clarity and professionalism in our interactions. We kindly request that you adhere to these guidelines as a matter of common courtesy.   
                    </p>
                    <h3 className="text-md font-bold text-white">11.2 Prompt Response:</h3>
                    <p>
                    We are committed to responding to your inquiries and service requests as promptly as possible. In the rare event that you seek assistance or services from someone else while engaging with us, we request that you inform us beforehand to avoid any misunderstandings or conflicts.
                    </p>
                    <h3 className="text-md font-bold text-white">11.3 Compliance Requirement:</h3>
                    <p>
                    Users are expected to comply with this &ldquo;Common Courtesy&rdquo; policy, and any violations may result in corrective actions, including a restriction of services or access.   
                    </p>
                    <h3 className="text-lg font-bold text-white">12. Abusive Members</h3>
                    <h3 className="text-md font-bold text-white">12.1 Prohibition of Abuse:</h3>
                    <p>
                    We maintain a strict policy against any form of abuse directed towards our team members, and such behavior is deemed unacceptable. It is imperative that users communicate with kindness and respect when interacting with authorized staff. Failure to do so may result in the termination of services without eligibility for a refund. We require all interactions to be conducted with common decency and courtesy. Additionally, we reserve the right to decline tasks that lack proper planning or implementation, posing significant risks or disruptions.
                    </p>
                    <h3 className="text-md font-bold text-white">12.2 Understanding Downtime and High-Level Issues:</h3>
                    <p>
                    We acknowledge the importance of addressing issues promptly, including those resulting in downtime or causing high-level disruptions. We appreciate your understanding and patience in such situations, as they may require time for resolution.    
                    </p>
                    <h3 className="text-md font-bold text-white">12.3 Leadership Team&apos;s Authority:</h3>
                    <p>
                    Upon joining and participating in Hydrabank, it is essential to acknowledge that the decisions and directives of the leadership team are final. We do not entertain requests for changes or compromises once a decision has been made. If there is no valid reason presented for a significant change that could impact player or customer connectivity, we reserve the right to decline the task(s) to avoid potential disputes, data loss, or disagreements with the sending party.    
                    </p>
                    <h3 className="text-lg font-bold text-white">13. Termination, Suspension, or Cancellation of Services</h3>
                    <h3 className="text-md font-bold text-white">13.1 Discretionary Authority:</h3>
                    <p>
                    We (&ldquo;Hydrabank&rdquo; and &ldquo;Hydride&rdquo;) reserve the absolute right to terminate, suspend, or cancel any service provided to users at any time and for any reason, without prior notice or consent from the affected party.    
                    </p>
                    <h3 className="text-md font-bold text-white">13.2 Reasons for Termination:</h3>
                    <p>Such actions may be taken by Jasmeow.Systems, but are not limited to, the following circumstances: </p>
                    <h3 className="text-rg font-bold text-white">a) Violation of Terms:</h3>
                    <p>
                    Users found to be in violation of any terms, policies, or guidelines outlined in this agreement or any associated documents.    
                    </p>
                    <h3 className="text-rg font-bold text-white">b) Abuse and Disrespect:</h3>
                    <p>
                    Instances of abuse, harassment, disrespectful behavior, or any conduct that disrupts the peace, safety, or well-being of our team members, other users, or our operations.    
                    </p>
                    <h3 className="text-rg font-bold text-white">c) Legal Obligations:</h3>
                    <p>
                    Compliance with legal obligations or requirements, including but not limited to court orders, government requests, or law enforcement directives.    
                    </p>
                    <h3 className="text-rg font-bold text-white">d) Operational Necessity:</h3>
                    <p>
                    Situations where the continuation of service provision may pose operational risks or impair our ability to maintain the integrity, security, or functionality of our services.    
                    </p>
					<p> </p>
					<p>
						By using our services, you acknowledge that you have read, understood, and agreed to these Terms of Service. If you have any questions or concerns, please contact us at
						<Link href="mailto:legal@hydride.dev" target="_blank" rel="noreferrer noopener" className="text-purple-400 hover:text-purple-500 hover:underline">
							legal@hydride.dev
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
}

"use client";

import {
    Link,
} from "@heroui/react";

export function Footer() {
    return (
        <div className="mx-5">
            <hr className="border-t border-gray-300" />
            <div className="py-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div>
                        <h6 className="font-semibold mb-3">Product</h6>
                        <ul className="space-y-2">
                            <li><Link href="https://testflight.apple.com/join/gABvbUHH">Hermann for Mac</Link></li>
                            <li><Link href="https://testflight.apple.com/join/gABvbUHH">Hermann for iPhone</Link></li>
                            <li><Link href="https://testflight.apple.com/join/gABvbUHH">Hermann for Watch</Link></li>
                            <li><Link href="/releases">What&apos;s New</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-semibold mb-3">Connect</h6>
                        <ul className="space-y-2">
                            <li><Link href="https://x.com/hermanntime/">X</Link></li>
                            <li><Link rel="me" href="https://mastodon.social/@hermannapp">Mastodon</Link></li>
                            <li><Link href="https://t.me/hermannapp">Telegram</Link></li>
                            <li><Link href="mailto:hermann@ovodov.me">Email</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-semibold mb-3">Company</h6>
                        <ul className="space-y-2">
                            {/* <li><Link href="/about">About Us</Link></li> */}
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            {/* <li><Link href="/terms">Terms of Use</Link></li> */}
                            {/* <li><Link href="/static/hermann-presskit.zip">Press Kit</Link></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

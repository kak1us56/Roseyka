import { greatVibes } from "../../styles/fonts";
import Image from "next/image";
import viber from "../../icons/basil_viber-outline.png";
import instagram from "../../icons/instagram.png";
import facebook from "../../icons/facebook.png";
import watsapp from "../../icons/whatsapp.png";
import telegram from "../../icons/ic_baseline-telegram.png";
import messanger from "../../icons/fe_messanger.png";

export function Footer() {
    return (
        <footer className="bg-[#E1E1E3]">
            <div className="max-w-[80.125rem] px-4 mx-auto">
                <div className="px-[2.625rem] py-[3.0625rem] border-t-[6px] border-t-[#1D1D1F] flex items-center justify-between">
                    <div>
                        <h2 className={`${greatVibes.className} text-[2.25rem] text-[#1D1D1F] font-normal`}>Бессарабський степ</h2>
                        <div className="pt-8">©2026 Бессарабський степ, Inc. All rights reserved. </div>
                    </div>
                    <div className="flex gap-8 items-center">
                        <Image src={viber} alt="Viber" />
                        <Image src={instagram} alt="Instagram" />
                        <Image src={facebook} alt="Facebook" />
                        <Image src={watsapp} alt="WhatsApp" />
                        <Image src={telegram} alt="Telegram" />
                        <Image src={messanger} alt="Messanger" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
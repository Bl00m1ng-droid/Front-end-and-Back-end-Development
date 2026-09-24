function Footer() {
    const linkStyle = "hover:text-orange-400 underline-offset-2 hover:underline transition";

    return (
        <footer className="bg-black text-white py-4 px-6 md:px-24">
            <div className="flex flex-col items-center justify-center">
                <p className="text-sm text-center">449 Adylin Westgate Harare</p>

                <div className="text-sm text-center flex flex-col md:flex-row md:gap-2 items-center">
                    <span>Email:</span>
                    <a href="mailto:rutendo@nexwellsafety.co.zw" className={linkStyle}>
                        rutendo@nexwellsafety.co.zw
                    </a>
                    <span className="hidden md:inline">|</span>
                    <a href="mailto:trevor@nexwellsafety.co.zw" className={linkStyle}>
                        trevor@nexwellsafety.co.zw
                    </a>
                </div>

                <div className="text-sm text-center flex flex-col md:flex-row md:gap-2 items-center">
                    <span>Email:</span>
                    <a href="mailto:sales@nexwellsafety.co.zw" className={linkStyle}>
                        sales@nexwellsafety.co.zw
                    </a>
                </div>

                <p className="text-sm text-center">
                    Phone:{" "}
                    <a href="tel:+263715337733" className={linkStyle}>
                        +263 715 337 733
                    </a>
                </p>

                <p className="text-sm text-center">&copy; Nexwell Safety. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
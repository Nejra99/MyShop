import './FooterStyles/style.css';

const Footer = () => {
    return (
        <div>
            <footer class='footer'>
                <div class='footer__addr'>
                    <h1 class='footer__logo'>FashionIN</h1>

                    <h2>Contact</h2>

                    <address>
                        5534 Somewhere In. The World 22193-10212
                        <a class='footer__btn' href='mailto:example@gmail.com'>
                            Email Us
                        </a>
                    </address>
                </div>

                <ul class='footer__nav'>
                    <li class='nav__item'>
                        <h2 class='nav__title'>Media</h2>

                        <ul class='nav__ul'>
                            <li>
                                <p>Online</p>
                            </li>

                            <li>
                                <p>Print</p>
                            </li>

                            <li>
                                <p>Alternative Ads</p>
                            </li>
                        </ul>
                    </li>

                    <li class='nav__item nav__item--extra'>
                        <h2 class='nav__title'>Technology</h2>

                        <ul class='nav__ul nav__ul--extra'>
                            <li>
                                <p>Hardware Design</p>
                            </li>

                            <li>
                                <p>Software Design</p>
                            </li>

                            <li>
                                <p>Digital Signage</p>
                            </li>

                            <li>
                                <p>Automation</p>
                            </li>

                            <li>
                                <p>Artificial Intelligence</p>
                            </li>

                            <li>
                                <p>IoT</p>
                            </li>
                        </ul>
                    </li>

                    <li class='nav__item'>
                        <h2 class='nav__title'>Legal</h2>

                        <ul class='nav__ul'>
                            <li>
                                <p>Privacy Policy</p>
                            </li>

                            <li>
                                <p>Terms of Use</p>
                            </li>

                            <li>
                                <p>Sitemap</p>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div class='legal'>
                    <p>&copy; 2023 All rights reserved.</p>

                    <div class='legal__links'>
                        <span>
                            Made with <span class='heart'>♥</span> remotely from
                            Anywhere
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

import React from 'react';
import './Footer.css';
import CapgeminiLogo from '../../img/capgLogo.png';

export default function Footer() {
    return (
        <div className="container-fluid footerClass" id="footer-well">
            <div className="row" style={{ height: "100px", backgroundColor: "#f8f8ff" }} id="footer">
                <div className="col-lg-3">
                    <table className="table-responsive mt-5 ms-5" id="capg-logo">
                        <tbody>
                            <tr>
                                <td>
                                    <img src={CapgeminiLogo} alt="logo" height="35" width="130" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-3">
                    <table className="table-responsive mt-4">
                        <tbody>
                            <tr>
                                <td>
                                    <a
                                        href="https://talent.capgemini.com/media_library/Medias/Global_Marketing_and_Communications/Data_Protection_Notice_Talent.pdf">
                                        Data Protection Notice</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://talent.capgemini.com/media_library/Medias/Documents/Group_Documents/Terms_of_use_intranet.pdf">
                                        Terms of Use</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-3">
                    <table className="table-responsive mt-4">
                        <tbody>
                            <tr>
                                <td>
                                    <a
                                        href="https://talent.capgemini.com/global/pages/about_us/global_functions/valuesandethics/guidelines/social_media_guidelines/Group_Social_Media_Guidelines/">
                                        Group Social Media Guidelines</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <br />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="https://talent.capgemini.com/rss/in_rss.xml">
                                        RSS Feed</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-3">
                    <table className="table-responsive mt-3">
                        <tbody>
                            <tr>
                                <td>
                                    <a href="https://talent.capgemini.com/in/contact">
                                        Contact</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row" style={{ backgroundColor: "#dcdcdc" }}>
                <div className="mx-auto" style={{ fontWeight: "0.25", width: "500px" }}>Confidential and for internal use only. Copyright
                    &copy;2022. All rights reserved.</div>
            </div>
        </div>
    )
}
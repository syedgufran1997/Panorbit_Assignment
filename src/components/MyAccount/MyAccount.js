import React from 'react';
import myaccountstyles from  "./myaccountstyles.module.css"
import Map from "../../assets/Images/map.png"

const MyAccount = () => {

    return (
        <>
            <div className={myaccountstyles.wrapper}>
                <div className={myaccountstyles.sidebarWrap}>
                    <div className={myaccountstyles.sideContentWrap}>
                        <h4>Profile</h4>
                        <h4>Posts</h4>
                        <h4>Gallery</h4>
                        <h4 className={myaccountstyles.todo}>ToDo</h4>
                    </div>
                </div>
                <div className={myaccountstyles.contentwrap}>
                    <div className={myaccountstyles.headingWrap}>
                        <h3>Profile</h3>
                        <div className={myaccountstyles.namewrap}>
                            <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="example" />
                            <h4>Clementine Bauch</h4> 
                        </div>
                    </div>
                    <div className={myaccountstyles.profile_address_wrapper}>
                        <div className={myaccountstyles.leftProfile}>
                            <div className={myaccountstyles.profilewrap}> 
                            <div className={myaccountstyles.picwrap}>
                                <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="example" />
                                <h3>Clementine Bauch</h3>
                                </div>
                                <div className={myaccountstyles.detailswrap}>
                                    <div className={myaccountstyles.headname}>
                                        <h3>Username :</h3>
                                        <h3>e-mail :</h3>
                                        <h3>Phone :</h3>
                                        <h3>Website :</h3>
                                    </div>
                                    <div className={myaccountstyles.names}>
                                        <h3>Bauch</h3>
                                        <h3>clem@april.biz</h3>
                                        <h3>5689201203</h3>
                                        <h3>clementine@.com</h3>
                                    </div>
                                </div>
                            </div>
                            <div className={myaccountstyles.company}>
                                <div className={myaccountstyles.companyname}>
                                    <h3>Company</h3>
                                </div>
                                <div className={myaccountstyles.companywrap}>
                                    <div className={myaccountstyles.headname}>
                                        <h3>Name :</h3>
                                        <h3>catchphrase :</h3>
                                        <h3>bs :</h3>
                                    </div>
                                    <div className={myaccountstyles.names}>
                                        <h3>Lorem Ipsum</h3>
                                        <h3>Multi-Layered client-serventine</h3>
                                        <h3>real-time <br/> e-markets</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={myaccountstyles.rightAddress}>
                            <div className={myaccountstyles.addressheading}>
                                <h3>Address :</h3>
                            </div>
                            <div className={myaccountstyles.address}>
                                <div className={myaccountstyles.addresswrap}>
                                    <div className={myaccountstyles.addressname}>
                                                <h3>Street  : </h3>
                                                <h3>Suite  :</h3>
                                                <h3>City  :</h3>
                                                <h3>Zipcode  :</h3>
                                    </div>
                                    <div className={myaccountstyles.addressdetails}>
                                                <h3>No 6</h3>
                                                <h3>Apt. 2015</h3>
                                                <h3>Berlin</h3>
                                                <h3>52102-6850</h3>
                                    </div>
                                </div>
                                <img src={Map} alt="example" />
                                <div className={myaccountstyles.location}>
                                    <div className={myaccountstyles.lat}>
                                        <h5>Lat:</h5>
                                        <p>-37.3159</p>
                                    </div>
                                    <div className={myaccountstyles.long}>
                                        <h5>Long:</h5>
                                        <p>81.1496</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
 
export default MyAccount;
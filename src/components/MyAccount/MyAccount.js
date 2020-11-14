import React from 'react';
import myaccountstyles from  "./myaccountstyles.module.css"


const MyAccount = () => {

    return (
        <>
            <div className={myaccountstyles.wrapper}>
                <div className={myaccountstyles.sidebarWrap}>
                    <div className={myaccountstyles.sideContentWrap}>
                        <h4>Profile</h4>
                        <h4>Posts</h4>
                        <h4>Gallery</h4>
                        <h4>ToDo</h4>
                    </div>
                </div>
                <div className={myaccountstyles.contentwrap}>
                    <div className={myaccountstyles.headingWrap}></div>
                    <div className={myaccountstyles.profile_address_wrapper}>
                        <div className={myaccountstyles.leftProfile}></div>
                        <div className={myaccountstyles.rightAddress}></div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
 
export default MyAccount;
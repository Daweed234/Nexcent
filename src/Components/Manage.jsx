import React from "react";
import Member from "../assets/Member.png";
import National from "../assets/National.png";
import Club from "../assets/Club.png";

const Manage = () => {
    return (
        <>
            <div>
                <div className=" grid gap-2 justify-center items-center text-center py-14">
                    <p className="text-[#4D4D4D] text-3xl font-semibold ">
                        Manage your entire community <br /> in a single system
                    </p>
                    <p className="text-[#717171]">Who is Nextcent suitable for?</p>
                </div>
                <div className="flex md:flex-col justify-center gap-20">
                    <div className="flex shadow-md px-6 py-9 flex-col items-center">
                        <img className=" text-center items-center" src={Member} alt="" />
                        <h1 className=" text-[#4D4D4D] text-lg font-semibold">
                            Membership <br /> Organisations
                        </h1>
                        <p className=" text-[#717171]">
                            Our membership management <br />
                            software provides full automation of <br />
                            membership renewals and payments
                        </p>
                    </div>
                    <div className="flex shadow-md px-6 py-9 flex-col items-center">
                        <img className=" text-center items-center" src={National} alt="" />
                        <h1 className=" text-[#4D4D4D] text-lg font-semibold">
                            National <br /> Associations
                        </h1>
                        <p className=" text-[#717171]">
                            Our membership management <br />
                            software provides full automation of <br />
                            membership renewals and <br />
                            payments
                        </p>
                    </div>
                    <div className="flex shadow-md px-6 py-9 flex-col items-center">
                        <img className=" text-center items-center" src={Club} alt="" />
                        <h1 className=" text-[#4D4D4D] text-lg font-semibold">
                            Clubs And <br /> Groups
                        </h1>
                        <p className=" text-[#717171]">
                            Our membership management <br />
                            software provides full automation of <br />
                            membership renewals and payments
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Manage;

import Link from "next/link";
import Image from "next/image";
import {SearchInput} from "@/app/(home)/search-input";
import {UserButton,OrganizationSwitcher} from "@clerk/clerk-react";



export const Navbar=()=>{
    return (
        <nav className="flex items-center justify-between w-full h-full">
            <div className="flex gap-3 items-center shrink-0 pr-4">
                <Link href="/">
                    <Image src="/logo.webp" alt="logo" width={36} height={36} />
                </Link>
                <h3 className="text-2xl italic font-bold text-gray-900">

                    CollabWrite
                </h3>
            </div>
            <SearchInput/>
            <div className="flex gap-3 items-center ">

                <OrganizationSwitcher
                    afterCreateOrganizationUrl='/'
                    afterLeaveOrganizationUrl='/'
                    afterSelectOrganizationUrl='/'
                    afterSelectPersonalUrl='/'
                />
                <UserButton/>
            </div>

        </nav>
    )
}
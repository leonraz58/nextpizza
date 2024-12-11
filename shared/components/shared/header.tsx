'use client';

import {Container} from "@/shared/components/shared/container";
import Link from "next/link";
import {cn} from "@/shared/lib/utils";
import Image from 'next/image';
import {Button} from "@/shared/components/ui/button";
import {User} from "lucide-react";
import {SearchInput} from "./search-input";
import React from "react";
import {CartButton} from "@/shared/components/shared/cart-button";
import {useRouter, useSearchParams} from "next/navigation";
import toast from "react-hot-toast";
import {signIn, useSession} from "next-auth/react";
import {ProfileButton} from "@/shared/components";

interface Props {
    hasSearch?: boolean;
    hasCart?: boolean;
    className?: string;
}


export const Header: React.FC<Props> = ({hasSearch = true, hasCart = true, className}) => {

    const {data: session} = useSession();
    console.log(session)

    const router = useRouter();
    const searchParams = useSearchParams();

    React.useEffect(() => {
        let toastMessage = '';

        if (searchParams.has('paid')) {
            toastMessage = 'Заказ успешно оплачен! Информация отправлена на почту.';
        }

        if (toastMessage) {
            setTimeout(() => {
                router.replace('/');
                toast.success(toastMessage, {
                    duration: 3000,
                });
            }, 1000);
        }
    }, []);

    return (
        <header className={cn('border-b border-gray-100', className)}>
            <Container className="flex items-center justify-between py-8">
                <Link href="/public">
                    <div className="flex items-center gap-4">
                        <Image src="/logo.png" width={35} height={35} alt="Logo"/>
                        <div>
                            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                            <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
                        </div>
                    </div>
                </Link>


                {hasSearch && (
                    <div className="mx-10 flex-1">
                        <SearchInput />
                    </div>
                )}

                <div className="flex items-center gap-1">
                    <ProfileButton onClickSignIn={() => {signIn('github', {
                        callbackUrl: '/',
                        redirect: true
                    })}}/>

                    {hasCart && <CartButton />}
                </div>
            </Container>
        </header>
    );
};
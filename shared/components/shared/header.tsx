import {Container} from "@/shared/components/shared/container";
import Link from "next/link";
import {cn} from "@/shared/lib/utils";
import Image from 'next/image';
import {Button} from "@/shared/components/ui/button";
import {User} from "lucide-react";
import {SearchInput} from "./search-input";
import React from "react";
import {CartButton} from "@/shared/components/shared/cart-button";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {

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


                <div className="mx-10 flex-1">
                    <SearchInput/>
                </div>

                <div className="flex items-center gap-1">
                    <Button variant="outline">
                        <User size={16}/>
                        Войти
                    </Button>

                    <CartButton/>
                </div>
            </Container>
        </header>
    );
};
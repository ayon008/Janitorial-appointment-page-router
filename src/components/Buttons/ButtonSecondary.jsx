import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import React from 'react';

const ButtonSecondary = ({ href, label, userHref }) => {
    const { user } = useAuth();
    return (
        <Link href={user ? userHref : href}><button className="btn bg-primary text-white rounded-lg px-10 text-base  font-bold">{label}</button></Link>
    );
};

export default ButtonSecondary;
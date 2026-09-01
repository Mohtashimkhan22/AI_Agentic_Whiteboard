'use client'
import React, { useEffect } from 'react'
import axios from 'axios';
import { User } from 'lucide-react';
import { UserDetailContext } from '@/context/UserDetailContext';

const Provider = ({children}: {children: React.ReactNode}) => {

    const [userDetail, setUserDetail] = React.useState<any | null>(null);

    useEffect(() => {
        createNewUser();
    }, []);

    const createNewUser = async () => {
        const response = await axios.post('/api/users');
        console.log('User created:', response.data);
        setUserDetail(response.data);
    }

  return (
    <UserDetailContext.Provider value={{}}>
      <div>
        {children}
    </div>
    </UserDetailContext.Provider>
  )
}

export default Provider
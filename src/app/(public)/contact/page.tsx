import { Breadcrumb } from '@/components/reuseable/Hero2'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <Breadcrumb
        title="Shop"
        backgroundImage="/images/hero2.jpg"
        links={[
          { name: "Home", href: "/" },
          { name: "Shop", href: "/shop" },
        ]}
      />
    </div>
  )
}

export default Contact

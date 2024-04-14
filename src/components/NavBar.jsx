import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "./ui/Navbar"; // Adjust the path accordingly
import { cn } from "../utils/cn"; 

function Navbar() {
  const [active, setActive] = useState(null);
  
  return (
    <div className="fixed inset-x-0 max-w-3xl mx-auto z-50" style={{top: '10%'}}>
      <Menu setActive={setActive} >
      <MenuItem setActive={setActive} active={active} item="Our Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/pick-up">Car Pick-Up Service</HoveredLink>
            <HoveredLink href="/repair-management">Repair Management</HoveredLink>
            <HoveredLink href="/insurance-liaison">Insurance Liaison</HoveredLink>
            <HoveredLink href="/status-updates">Real-Time Status Updates</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Blogs">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Customer Testimonials">
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/testimonials">What Our Clients Say</HoveredLink>
            <HoveredLink href="/testimonials">Reviews</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us">
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/testimonials">What Our Clients Say</HoveredLink>
            <HoveredLink href="/testimonials">Reviews</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export { Navbar };

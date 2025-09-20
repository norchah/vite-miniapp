import React from 'react';
import {layoutConfig} from "../../../configs/layoutConfig.js";
import {siteConfig} from "../../../configs/siteConfig.js";


export default function TheHeader() {
  return (
    <header className={`${layoutConfig.flexColItemsJustify}`}>
      <img src="/logo-free-bg.svg" alt="logo" width={80} height={80}/>
      <h1 className='text-bold text-xl'>KeyCraft</h1>
      <p className='max-w-[320px] text-center text-gray-200'>{siteConfig.mainDescription}</p>
    </header>
  );
}
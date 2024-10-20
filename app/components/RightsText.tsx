'use client'

import { useState, useEffect } from "react";

export default function RightsText(){
    const [year, setYear] = useState<number>(new Date().getFullYear());
    
    useEffect(() => {
        setYear(new Date().getFullYear());
      }, []);

      return <p className="text-xs text-white">
      &copy; {year} Pedro. All rights reserved.
    </p>
}
"use client";
import { useCallback, useEffect, useState } from "react";

const KEY="jovi-academy-cofre-v1";
function getLocal() {
  try {const value = JSON.parse(localStorage.getItem(KEY)||"[]");return Array.isArray(value)?value:null;}
  catch{return null;}
}
export function useLibrary(active=true) {
  const [items,setItems]=useState([]);
  const [loading,setLoading]=useState(Boolean(active));
  const [error,setError]=useState("");
  const refresh=useCallback(async()=>{
    if (!active) return;
    try {
      setLoading(true);
      const response=await fetch("/api/library",{cache:"no-store"});
      if (!response.ok) throw new Error("Não foi possível carregar o cofre.");
      const data=await response.json();
      const saved=getLocal();
      // Saved list takes precedence, allowing edits and deletion of demo entries.
      setItems(saved===null?data.items:saved);
      setError("");
    } catch(err){setError(err.message);setItems(getLocal()||[]);}
    finally{setLoading(false);}
  },[active]);
  useEffect(()=>{refresh();},[refresh]);
  function persist(updater){
    setItems(current=>{
      const next=typeof updater==="function"?updater(current):updater;
      localStorage.setItem(KEY,JSON.stringify(next));
      return next;
    });
  }
  const addItem=async(item)=>{
    const response=await fetch("/api/library",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(item)});
    const data=await response.json();
    if(!response.ok)throw new Error(data.error||"Não foi possível salvar.");
    persist(current=>[data.item,...current]);
    return data.item;
  };
  const updateItem=(id,fields)=>persist(current=>current.map(item=>item.id===id?{...item,...fields}:item));
  const removeItem=id=>persist(current=>current.filter(item=>item.id!==id));
  return {items,loading,error,addItem,updateItem,removeItem,refresh};
}

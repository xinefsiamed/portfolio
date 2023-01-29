'use client'

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form"

interface FormData {
  email: string,
  name: string,
  last_name: string,
  message: string,
}

export function ContactForm() {

  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<FormData>();
  const [successMessage, setSuccessMessage] = useState("");

  function onSubmit(data: FormData) {
    axios
      .post("https://eohlkh21dx7a2uw.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage(
          `Obrigado por mandar uma mensagem, retornarei o mais breve possível 😊`
        );
        reset()
      })
      .catch((e) => console.error(e));
  }

  return (
    <section id='contato' className='h-screen bg-contato_bg bg-center bg-cover'>
      <div className='w-full h-full flex flex-col items-center backdrop-blur-sm gap-4'>
        <h2 className='lg:text-4xl lg:mt-12 mt-8 text-2xl  text-center font-bold underline underline-offset-8 decoration-4 decoration-[#F72585] text-neutral-200'>Contato</h2>

        <form action="" onSubmit={handleSubmit(onSubmit)} className='text-xl rounded-xl w-[60%] max-md:w-[90%] p-10 bg-slate-900/80 shadow-2xl shadow-black/30 font-sans flex flex-col gap-5'>

          <div className='flex flex-col '>
            <label className='font-bold text-[#F72585] font-sans' htmlFor="frm-email">Email</label>
            <input {...register("email")} className='rounded-lg shadow-inner shadow-black/40 font-mono font-semibold' type="email" name="email" id="frm-email" required />
          </div>

          <div className='flex justify-between max-md:flex-col gap-4'>
            <div className='flex flex-col w-[50%] max-md:w-full'>
              <label className='font-bold text-[#F72585] font-sans' htmlFor="frm-firstname">Nome</label>
              <input  {...register("name")} className='rounded-lg shadow-inner shadow-black/40 font-mono font-semibold' type="text" name="name" id="frm-firstname" required />
            </div>

            <div className='flex flex-col w-[50%] max-md:w-full'>
              <label className='font-bold text-[#F72585] font-sans' htmlFor="frm-lastname">Sobrenome</label>
              <input {...register("last_name")} className='rounded-lg shadow-inner shadow-black/40 font-mono font-semibold' type="text" name="last_name" id="frm-lastname" required />
            </div>
          </div>

          <div className='flex flex-col'>
            <label className='font-bold text-[#F72585] font-sans' htmlFor="frm-message">Mensagem</label>
            <textarea {...register("message")} className='rounded-lg shadow-inner shadow-black/40 font-mono font-semibold resize-none' name="message" id="frm-message" rows={6}></textarea>
          </div>

          <div className='flex-1'>
            <button className='w-[100%] p-2 rounded-xl bg-[#B5179E] text-white font-sans font-bold shadow-inner shadow-black/40 hover:bg-[#F72585] transition delay-75' role="submit">
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>

            {successMessage && <p className="mt-4 font-sans font-bold p-2 text-emerald-500">{successMessage}</p>}
          </div>
        </form>

      </div>
    </section>
  )
}
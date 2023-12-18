/* eslint-disable @next/next/no-img-element */
'use client'
import { PrimaryButton } from '@/app/_components/Buttons/Buttons'
import * as Form from '@radix-ui/react-form'
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { IoLanguage } from 'react-icons/io5'
import { LuScrollText } from 'react-icons/lu'
import languageData, { ILanguage } from '../../../../util/languages'
const Page = () => {
  const [step, setStep] = useState(2)

  const handleSubmitA = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(step + 1)
    console.log('Submit FormA')
  }
  const handleSubmitB = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(step + 1)
    console.log('Submit FormB')
  }
  const renderForm = () => {
    if (step === 1) return <FormA handleSubmit={handleSubmitA} />
    if (step === 2) return <FormB handleSubmit={handleSubmitB} />
  }
  return (
    <div className='ml-auto mr-auto w-full relative flex flex-col lg:flex-row justify-center h-full'>
      <div className='flex-[1] flex-grow'></div>
      <div className='flex flex-col bg-[#2c2c2c] flex-[0] lg:fixed p-6 gap-4 left-4 top-20 lg:rounded-lg'>
        <StepDiv step={1} title='Register Info' text='Make an account to start your language questing!' cur={step} />
        <StepDiv step={2} title='Looking For?' text='What language quests are you seeking?' cur={step} />
        <StepDiv step={3} title='My Languages' text='Which languages can you currently speak?' cur={step} />
      </div>
      <div className='flex-[2] flex justify-center'>{renderForm()}</div>
    </div>
  )
}

export default Page

const StepDiv = ({ step, title, text, cur }: { step: number; title: string; text: string; cur: number }) => {
  const isFinished = cur > step
  return (
    <div className='flex items-start gap-2 '>
      <div
        className={`${cur === step ? 'text-blue-600 border-blue-600' : 'text-neutral-400 border-neutral-400'} ${
          isFinished && '!text-green-600 !border-green-600'
        } border-2  rounded-full w-[25px] h-[25px] flex items-center justify-center p-[3px] text-sm mt-1`}
      >
        {isFinished ? <FaCheck /> : <p>{step}</p>}
      </div>
      <div className='flex flex-col'>
        <h1 className={`text-white font-bold text-lg ${isFinished && 'text-green-600'}`}>{title}</h1>
        <p className={`text-neutral-300 text-sm ${isFinished && 'text-green-600'}`}>{text}</p>
      </div>
    </div>
  )
}

const FormA = ({ handleSubmit }: { handleSubmit: (e: React.FormEvent) => void }) => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='flex flex-col items-center gap-10 pt-10 w-full px-6 ml-auto mr-auto max-w-[600px]'>
      <div className='text-white w-[50px] h-[50px] flex items-center justify-center'>
        <LuScrollText size={50} />
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-white font-bold text-2xl'>Register Info</h1>
        <p className='text-neutral-100 text-sm'>
          Please Sign Up to get the full experience of <span className='text-gradient font-bold'>Questlang!</span>
        </p>
      </div>
      <Form.Root className='w-full flex flex-col ' onSubmit={handleSubmit}>
        <Form.Field name='name' className='flex flex-col mb-3 w-full'>
          <div className='flex justify-between'>
            <Form.Label className='text-white'>
              First Name<span className='text-red-500'>*</span>
            </Form.Label>
            <Form.Message match={'valueMissing'} className='text-red-200 text-sm'>
              Please enter your name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type='text'
              required
              className='width-full rounded text-white bg-black border-2 border-neutral-700 hover:border-neutral-600 pl-2 py-1'
              placeholder='Enter you first name'
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name='username' className='flex flex-col mb-3 w-full'>
          <div className='flex justify-between'>
            <Form.Label className='text-white'>
              Username<span className='text-red-500'>*</span>
            </Form.Label>
            <Form.Message match={'valueMissing'} className='text-red-200 text-sm'>
              Please enter your username
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type='text'
              required
              className='width-full rounded text-white bg-black border-2 border-neutral-700 hover:border-neutral-600 pl-2 py-1'
              placeholder='Enter a username'
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name='email' className='grid mb-3'>
          <div className='flex justify-between'>
            <Form.Label className='text-white'>
              Email<span className='text-red-500'>*</span>
            </Form.Label>
            <Form.Message match={'valueMissing'} className='text-red-200 text-sm'>
              Please enter your email
            </Form.Message>
            <Form.Message match={'typeMismatch'} className='text-red-200 text-sm'>
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type='email'
              required
              className='width-full rounded text-white bg-black border-2 border-neutral-700 hover:border-neutral-600 pl-2 py-1'
              placeholder='Enter you email'
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name='password' className='grid mb-3'>
          <div className='flex justify-between'>
            <Form.Label className='text-white'>
              Password<span className='text-red-500'>*</span>
            </Form.Label>
            <Form.Message match={'valueMissing'} className='text-red-200 text-sm'>
              Please enter a password
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type='password'
              required
              className='width-full rounded text-white bg-black border-2 border-neutral-700 hover:border-neutral-600 pl-2 py-1'
              placeholder='Enter password'
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field name='confirm password' className='grid mb-3'>
          <div className='flex justify-between'>
            <Form.Label className='text-white'>
              Confirm Password<span className='text-red-500'>*</span>
            </Form.Label>
            <Form.Message match={'valueMissing'} className='text-red-200 text-sm'>
              Please enter a password
            </Form.Message>
            <Form.Message match={(value, formData) => value !== password} className='text-red-200 text-sm'>
              Passwords do not match
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type='password'
              required
              className='width-full rounded text-white bg-black border-2 border-neutral-700 hover:border-neutral-600 pl-2 py-1'
              placeholder='Confirm password'
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <PrimaryButton text='Continue' color='bg-blue-500' hoverColor='bg-blue-600' textBlack={false} className='w-full mt-2' />
        </Form.Submit>
      </Form.Root>
    </div>
  )
}

const FormB = ({ handleSubmit }: { handleSubmit: (e: React.FormEvent) => void }) => {
  const [languages, setLanguages] = useState<string[]>([])
  const toggleLanguage = (language: string) => {
    if (languages.includes(language)) {
      setLanguages(languages.filter(l => l !== language))
    } else {
      setLanguages([...languages, language])
    }
    console.log(languages)
  }
  return (
    <div className='flex flex-col items-center gap-10 pt-10 w-full px-6  '>
      <div className='text-white w-[50px] h-[50px] flex items-center justify-center'>
        <IoLanguage size={50} />
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-white font-bold text-2xl'>Looking For?</h1>
        <p className='text-neutral-100 text-sm text-center'>
          Please select all the languages you are looking to learn. You can always add more later!
        </p>
        <div className='flex flex-wrap justify-center gap-3 mt-10'>
          {languageData.languages.map((language: ILanguage) => (
            // eslint-disable-next-line react/jsx-key
            <CountryBlock
              highlighted={languages.includes(language.language)}
              country={language.country}
              countryCode={language.countryCode}
              img={language.img}
              language={language.language}
              toggleLanguage={toggleLanguage}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
type CountryBlockProps = Omit<ILanguage, 'toggleLanguage'> & {
  toggleLanguage: (language: string) => void
  highlighted: boolean
}
const CountryBlock = ({ country, countryCode, img, language, toggleLanguage, highlighted }: CountryBlockProps) => {
  return (
    <div
      key={countryCode}
      className={`bg-neutral-800 ${
        highlighted && 'bg-green-600 bg-opacity-30'
      } rounded-lg w-[150px] md:w-[200px] text-center border-2 border-b-4 border-neutral-600 flex flex-col items-center py-1 hover:bg-neutral-700 cursor-pointer`}
      onClick={() => toggleLanguage(language)}
    >
      <img src={img} alt='' className='w-[100px]' />
      <h2 className='text-xl text-white font-bold'>{language}</h2>
      <p className='text-neutral-200'>{country}</p>
    </div>
  )
}

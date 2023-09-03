import React from 'react'
import { cn } from '@/lib/utils'
import Assets from '@/assets/Assets'
import xongroh from '@/assets/xongroh.svg' // Import the xongroh image

const metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
}

function AuthenticationPage() {
  return (
    <>
      <div className="container relative hidden min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 overflow-hidden">
        <a
          href="/examples/authentication"
          className="absolute right-4 top-4 md:right-8 md:top-8"
        >
          Login
        </a>
        <div className="relative min-h-screen flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <img src={xongroh} alt="Xongroh" className="mr-2 h-6 w-6" />{' '}
            {/* Use the xongroh image */}
            Xongroh
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Jibon Kosupator Pani&rdquo;
              </p>
              <footer className="text-sm">Zubeen Garg</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            {/* <UserAuthForm /> */}
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthenticationPage

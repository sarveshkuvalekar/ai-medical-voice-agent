// import { SignUp } from '@clerk/nextjs'

// export default function Page() {
//   return (
//   <div className='flex items-center h-screen justify-center'>
//     <SignUp />
//   </div>
//   )
// }

import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex items-center h-screen justify-center bg-green-50'>
      <SignUp 
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-white shadow-xl rounded-xl border-0 overflow-hidden",
            headerTitle: "text-2xl font-bold text-green-800 mb-2",
            headerSubtitle: "text-green-600 text-sm",
            socialButtonsBlockButton: "border-2 border-green-200 hover:border-green-300 hover:bg-green-50 text-green-700 font-medium transition-all duration-200",
            socialButtonsBlockButtonText: "text-green-700 font-medium",
            formFieldLabel: "text-green-700 font-medium text-sm",
            formFieldInput: "border-2 border-green-200 focus:border-green-400 focus:ring-green-400 bg-green-50/50 text-green-800 rounded-lg",
            formButtonPrimary: "bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl",
            footerActionLink: "text-green-600 hover:text-green-800 font-medium",
            dividerLine: "bg-green-200",
            dividerText: "text-green-500",
            identityPreviewText: "text-green-700",
            formResendCodeLink: "text-green-600 hover:text-green-800",
            otpCodeFieldInput: "border-2 border-green-200 focus:border-green-400 focus:ring-green-400",
            formFieldSuccessText: "text-green-600",
            formFieldErrorText: "text-red-600",
            formFieldWarningText: "text-amber-600",
            formFieldHintText: "text-green-500 text-xs",
            formHeaderTitle: "text-green-800 font-bold",
            formHeaderSubtitle: "text-green-600"
          },
          variables: {
            colorPrimary: "#16A34A", // green-600
            colorText: "#166534", // green-800  
            colorTextSecondary: "#16A34A", // green-600
            colorBackground: "#FFFFFF",
            colorInputBackground: "#F0FDF4", // green-50
            colorInputText: "#166534", // green-800
            colorSuccess: "#16A34A", // green-600
            colorWarning: "#D97706", // amber-600
            colorDanger: "#DC2626", // red-600
            borderRadius: "0.75rem",
            fontFamily: "system-ui, -apple-system, sans-serif"
          },
          layout: {
            socialButtonsPlacement: "top",
            socialButtonsVariant: "blockButton"
          }
        }}
      />
    </div>
  )
}
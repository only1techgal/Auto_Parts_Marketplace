import RegisterForm from '@/components/forms/RegisterForm'

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Create an Account</h1>
        <RegisterForm />
      </div>
    </div>
  )
}

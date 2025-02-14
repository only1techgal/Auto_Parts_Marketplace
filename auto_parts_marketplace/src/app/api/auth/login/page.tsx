import LoginForm from '@/components/forms/LoginForm'

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Login to Your Account</h1>
        <LoginForm />
      </div>
    </div>
  )
}

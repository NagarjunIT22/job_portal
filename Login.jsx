import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup} from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { LogIn } from 'lucide-react'


const Login = () => {
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Login</h1>
                    <div className='my-3'>
                        <Label>Email</Label>
                        <Input
                            type='email'
                            placeholder='nagarjun@gmail.com'
                            className="my-2"


                        />
                    </div>
                    <div className='my-5'>
                        <Label>Password</Label>
                        <Input
                            type='password'
                            placeholder='Nagarjun'
                            className="my-2"


                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input
                                type="radio"
                                
                                name="role"
                                value="student"
                                className="cursor-pointer"/>
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                name="role"
                                value="recruiter"
                                className="cursor-pointer"/>
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                            
                        </RadioGroup>
               
                    </div>
                    <Button type="submit" className="w-full  my-4 bg-black text-white">Login</Button>
                    <div className='flex items-center justify-center'>
                    <span className='centre text-sm'>Don't have an account? <Link to="/signup" className='text-blue-600'>Singup</Link></span>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Login

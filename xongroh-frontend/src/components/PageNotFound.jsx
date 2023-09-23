import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const PageNotFound = () => {
  return (
    <div className="mt-16 p-4">
      <Card>
        <CardHeader>
          <CardTitle>404 - Page Not Found</CardTitle>
          <CardDescription>
            Sorry, the page you are looking for does not exist.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/" className="text-primary hover:underline">
            &larr; Go back to the Homepage.
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default PageNotFound

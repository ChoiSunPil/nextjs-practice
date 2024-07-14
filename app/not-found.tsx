import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Not Found'
};

export default function NotFound(){
    return(
    <div>
        <h1>404 - Page Not Found</h1>
    </div>

    );
}
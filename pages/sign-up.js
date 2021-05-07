import React from "react";
import Link from "next/link";
// import Button from "../src/components/Sub-Components/button";

function SignUp() {
	return (
		<>
			<h1>Sign up</h1>
			<Link href="/">
				<a>Home</a>
			</Link>{" "}
			{/* <Button name="Submit" /> */}
		</>
	);
}

export async function getServerSideProps(context) {
	return {
		props: {},
	};
}
export default SignUp;

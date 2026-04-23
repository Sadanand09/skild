import { SignIn } from "@clerk/tanstack-react-start";
import { createFileRoute } from "@tanstack/react-router";
import { Section } from "lucide-react";

export const Route = createFileRoute("/__auth/sign-in/$")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Section id="sign-in">
			<SignIn
				routing="path"
				path="/sign-in"
				signUpUrl="/sign-up"
				fallbackRedirectUrl="/"
			/>
		</Section>
	);
}

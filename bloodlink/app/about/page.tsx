"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Heart,
	Users,
	MapPin,
	Bell,
	Trophy,
	Shield,
	Smartphone,
	Globe,
	Target,
	Zap,
	Award,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
	const keyFeatures = [
		{
			icon: <Bell className="h-6 w-6" />,
			title: "Real-Time Emergency Alerts",
			description:
				"SMS/WhatsApp notifications to nearby eligible donors during blood shortages",
		},
		{
			icon: <Heart className="h-6 w-6" />,
			title: "Pre-Pledge System",
			description: "Commit to future donations when your blood type is in scarcity",
		},
		{
			icon: <MapPin className="h-6 w-6" />,
			title: "Live Blood Tracking",
			description: "Track the journey of your donated blood and see its impact",
		},
		{
			icon: <Trophy className="h-6 w-6" />,
			title: "Gamification Elements",
			description:
				"Badges, leaderboards, and streak rewards to increase donor motivation",
		},
		{
			icon: <Users className="h-6 w-6" />,
			title: "Campaign Management",
			description: "Organize, manage, and promote donation drives with ease",
		},
		{
			icon: <Shield className="h-6 w-6" />,
			title: "Secure & Transparent",
			description:
				"Financial donation processing with fund tracking and donor recognition",
		},
	];

	const stats = [
		{
			number: "10,000+",
			label: "Target Donors",
			icon: <Users className="h-5 w-5" />,
		},
		{ number: "3", label: "Languages", icon: <Globe className="h-5 w-5" /> },
		{
			number: "24/7",
			label: "Emergency Alerts",
			icon: <Zap className="h-5 w-5" />,
		},
		{
			number: "100%",
			label: "Transparency",
			icon: <Shield className="h-5 w-5" />,
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-800">
			{/* Hero Section */}
			<section className="py-20 px-4 text-center">
				<div className="max-w-4xl mx-auto">
					<Badge variant="outline" className="mb-4 border-red-200 text-red-600">
						Team Saga
					</Badge>
					<h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
						About BloodLink
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
						A comprehensive, web-based platform designed to modernize and revolutionize
						blood and organ donation management in Sri Lanka. Bridging the communication
						gap between patients, hospitals, and donors through real-time alerts, live
						tracking, and community-driven features.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Link href="/register-donor">
							<Button size="lg" className="bg-red-600 hover:bg-red-700">
								<Heart className="h-5 w-5 mr-2" />
								Become a Donor
							</Button>
						</Link>
						<Link href="/contact">
							<Button variant="outline" size="lg">
								Get in Touch
							</Button>
						</Link>
					</div>
				</div>
			</section>
			{/* Problem & Solution */}
			<section className="py-16 px-4 bg-white dark:bg-gray-800">
				<div className="max-w-6xl mx-auto">
					<div className="grid md:grid-cols-2 gap-12">
						<Card className="border-red-100 dark:border-red-900">
							<CardContent className="p-8">
								<div className="flex items-center mb-4">
									<Target className="h-6 w-6 text-red-600 mr-3" />
									<h2 className="text-2xl font-bold">The Problem</h2>
								</div>
								<ul className="space-y-3 text-gray-600 dark:text-gray-300">
									<li>• Fragmented communication between donors and hospitals</li>
									<li>• Critical delays in emergency blood mobilization</li>
									<li>• Lack of real-time donor availability tracking</li>
									<li>• Low organ donation awareness in Sri Lanka</li>
									<li>• No transparent financial donation platforms</li>
									<li>• Blood shortages during disasters and emergencies</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="border-green-100 dark:border-green-900">
							<CardContent className="p-8">
								<div className="flex items-center mb-4">
									<Zap className="h-6 w-6 text-green-600 mr-3" />
									<h2 className="text-2xl font-bold">Our Solution</h2>
								</div>
								<ul className="space-y-3 text-gray-600 dark:text-gray-300">
									<li>• Centralized real-time emergency alert system</li>
									<li>• Smart donor matching and notification system</li>
									<li>• Transparent campaign and fund management</li>
									<li>• Gamified donor engagement platform</li>
									<li>• Multilingual accessibility (Sinhala, Tamil, English)</li>
									<li>• Integration with hospitals and emergency services</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
			{/* Key Features */}
			<section className="py-16 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Key Features</h2>
						<p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
							BloodLink combines cutting-edge technology with human compassion to create a
							comprehensive donation management ecosystem.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{keyFeatures.map((feature, index) => (
							<Card key={index} className="hover:shadow-lg transition-shadow">
								<CardContent className="p-6">
									<div className="flex items-center mb-4">
										<div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg text-red-600 dark:text-red-400 mr-3">
											{feature.icon}
										</div>
										<h3 className="font-semibold">{feature.title}</h3>
									</div>
									<p className="text-gray-600 dark:text-gray-300 text-sm">
										{feature.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
			{/* Statistics */}
			<section className="py-16 px-4 bg-red-600 text-white">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Our Impact Goals</h2>
						<p className="text-red-100">
							Setting ambitious targets to transform blood donation in Sri Lanka
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{stats.map((stat, index) => (
							<div key={index} className="text-center">
								<div className="flex justify-center mb-2">{stat.icon}</div>
								<div className="text-3xl font-bold mb-1">{stat.number}</div>
								<div className="text-red-100 text-sm">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* Implementation Roadmap */}
			<section className="py-16 px-4 bg-white dark:bg-gray-800">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Implementation Roadmap</h2>
						<p className="text-gray-600 dark:text-gray-300">
							Our strategic three-phase approach to nationwide adoption
						</p>
					</div>

					<div className="space-y-8">
						<Card className="border-l-4 border-l-blue-500">
							<CardContent className="p-6">
								<div className="flex items-center mb-3">
									<Badge variant="outline" className="mr-3">
										Phase 1
									</Badge>
									<h3 className="text-xl font-semibold">Pilot Launch</h3>
								</div>
								<p className="text-gray-600 dark:text-gray-300">
									Partner with universities and local hospitals in Colombo & Kandy to
									recruit early users and donors.
								</p>
							</CardContent>
						</Card>

						<Card className="border-l-4 border-l-yellow-500">
							<CardContent className="p-6">
								<div className="flex items-center mb-3">
									<Badge variant="outline" className="mr-3">
										Phase 2
									</Badge>
									<h3 className="text-xl font-semibold">District-Wide Expansion</h3>
								</div>
								<p className="text-gray-600 dark:text-gray-300">
									Add private hospitals, translate to Sinhala/Tamil, and introduce
									gamified rewards system.
								</p>
							</CardContent>
						</Card>

						<Card className="border-l-4 border-l-green-500">
							<CardContent className="p-6">
								<div className="flex items-center mb-3">
									<Badge variant="outline" className="mr-3">
										Phase 3
									</Badge>
									<h3 className="text-xl font-semibold">National Rollout</h3>
								</div>
								<p className="text-gray-600 dark:text-gray-300">
									Collaborate with Ministry of Health and integrate with emergency
									services for nationwide alerts.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>{" "}
			</section>{" "}
			{/* Call to Action */}
			<section className="py-16 px-4 bg-gradient-to-r from-red-600 to-pink-600 text-white">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-4">Join the BloodLink Community</h2>
					<p className="text-xl text-red-100 mb-8">
						Be part of a movement that's transforming how Sri Lanka responds to medical
						emergencies
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Link href="/register-donor">
							<Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
								<Heart className="h-5 w-5 mr-2" />
								Register as Donor
							</Button>
						</Link>
						<Link href="/contact">
							<Button
								variant="outline"
								size="lg"
								className="border-white text-white hover:bg-white hover:text-red-600"
							>
								Contact Us
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

"use client"

import { motion } from "framer-motion"
import {
    Clock,
    Flame,
    MapPin,
    Phone,
    Soup,
    Star,
    Utensils,
} from "lucide-react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type MenuItem = {
    name: string
    description: string
    price: string
    category: "ramen" | "sides"
    highlight?: string
}

const menuItems: MenuItem[] = [
    {
        name: "Classic Shoyu Ramen",
        description: "Soy-based chicken broth, pork chashu, marinated egg, bamboo, and scallions.",
        price: "$13.99",
        category: "ramen",
        highlight: "House favorite",
    },
    {
        name: "Spicy Miso Ramen",
        description: "Red miso broth, chili oil, sweet corn, bean sprouts, scallions, and sesame.",
        price: "$14.99",
        category: "ramen",
        highlight: "Spicy",
    },
    {
        name: "Tonkotsu Black Garlic",
        description: "Creamy pork broth, black garlic oil, thin noodles, chashu, and soft egg.",
        price: "$15.99",
        category: "ramen",
    },
    {
        name: "Vegan Mushroom Ramen",
        description: "Roasted mushroom broth, tofu, greens, pickled shiitake, and chili crisp.",
        price: "$13.49",
        category: "ramen",
        highlight: "Vegan",
    },
    {
        name: "Chicken Paitan",
        description: "Silky chicken broth, wavy noodles, jammy egg, garlic leeks, and nori.",
        price: "$14.49",
        category: "ramen",
    },
    {
        name: "Crispy Pork Gyoza",
        description: "Pan-fried dumplings with ginger pork filling and smoky ponzu dipping sauce.",
        price: "$7.99",
        category: "sides",
    },
    {
        name: "Karaage Chicken",
        description: "Japanese fried chicken with lemon, scallions, and yuzu pepper mayo.",
        price: "$8.99",
        category: "sides",
        highlight: "Crispy",
    },
    {
        name: "Matcha Cheesecake",
        description: "Creamy matcha dessert with toasted sesame crumble and orange zest.",
        price: "$6.99",
        category: "sides",
    },
]

const navItems = [
    { label: "Menu", href: "#menu" },
    { label: "Location", href: "#location" },
    { label: "Hours", href: "#contact" },
]

const ramenItems = menuItems.filter((item) => item.category === "ramen")
const sidesItems = menuItems.filter((item) => item.category === "sides")

const smoothTransition = {
    duration: 0.65,
    ease: [0.22, 1, 0.36, 1],
} as const

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: smoothTransition },
}

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: smoothTransition },
}

const staggerGroup = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.09,
            delayChildren: 0.08,
        },
    },
}

function MenuGrid({ items }: { items: MenuItem[] }) {
    return (
        <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerGroup}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.16 }}
        >
            {items.map((item) => (
                <motion.div
                    key={item.name}
                    variants={fadeUp}
                    whileHover={{ y: -5, scale: 1.015 }}
                    transition={smoothTransition}
                >
                    <Card className="h-full rounded-2xl border border-orange-200/80 bg-white/90 shadow-sm shadow-orange-900/5">
                        <CardHeader className="gap-3">
                            <div className="flex items-start justify-between gap-4">
                                <CardTitle className="font-sans text-base leading-tight tracking-normal normal-case text-stone-950">
                                    {item.name}
                                </CardTitle>
                                <motion.span
                                    className="shrink-0 rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-800"
                                    whileHover={{ scale: 1.08 }}
                                    transition={smoothTransition}
                                >
                                    {item.price}
                                </motion.span>
                            </div>
                            {item.highlight ? (
                                <motion.div variants={fadeIn}>
                                    <Badge className="text-orange-700">
                                        <Flame className="size-3" />
                                        {item.highlight}
                                    </Badge>
                                </motion.div>
                            ) : null}
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-sm leading-6 text-stone-700">
                                {item.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default function Home() {
    return (
        <motion.main
            className="min-h-screen overflow-hidden bg-background text-foreground"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
            <motion.header
                className="sticky top-0 z-40 border-b border-orange-200/70 bg-orange-50/90 backdrop-blur"
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={smoothTransition}
            >
                <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 md:h-16 md:flex-nowrap md:py-0 lg:px-8">
                    <motion.a
                        href="#top"
                        className="flex items-center gap-2 font-bold text-stone-950"
                        whileHover={{ scale: 1.03 }}
                        transition={smoothTransition}
                    >
                        <motion.span
                            className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
                            animate={{ rotate: [0, -6, 6, 0] }}
                            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Soup className="size-5" />
                        </motion.span>
                        <span className="font-heading text-xl">Noodle Theory</span>
                    </motion.a>

                    <NavigationMenu className="order-3 flex w-full max-w-none md:order-none md:w-auto">
                        <NavigationMenuList className="w-full justify-center gap-1 md:gap-2">
                            {navItems.map((item) => (
                                <NavigationMenuItem key={item.href} render={<motion.li whileHover={{ y: -2 }} transition={smoothTransition} />}>
                                    <NavigationMenuLink
                                        href={item.href}
                                        className="rounded-full px-3 py-2 text-sm font-semibold text-stone-800 hover:bg-orange-100 sm:px-4"
                                    >
                                        {item.label}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Button
                        size="sm"
                        className="rounded-full bg-primary px-5 text-primary-foreground hover:bg-orange-700"
                        nativeButton={false}
                        render={
                            <motion.a
                                href="tel:+15552486699"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.98 }}
                                transition={smoothTransition}
                            />
                        }
                    >
                        Order Now
                    </Button>
                </div>
            </motion.header>

            <motion.section id="top" className="relative bg-orange-50" variants={fadeIn}>
                <motion.div
                    className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20"
                    variants={staggerGroup}
                >
                    <motion.div className="max-w-3xl" variants={staggerGroup}>
                        <motion.div variants={fadeUp}>
                            <Badge className="mb-5 text-orange-700">
                                <Star className="size-3" />
                                Dallas ramen, fast and fiery
                            </Badge>
                        </motion.div>
                        <motion.h1
                            className="font-heading text-5xl font-bold leading-[0.98] text-stone-950 sm:text-6xl lg:text-7xl"
                            variants={fadeUp}
                        >
                            Hot Bowls. Bold Broth. Built for Ramen Lovers.
                        </motion.h1>
                        <motion.p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl" variants={fadeUp}>
                            Slurp-worthy noodles, slow-simmered broth, and crispy sides from a neighborhood ramen counter with big Friday-night energy.
                        </motion.p>
                        <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" variants={fadeUp}>
                            <Button
                                size="lg"
                                className="rounded-full bg-primary text-primary-foreground hover:bg-orange-700"
                                nativeButton={false}
                                render={
                                    <motion.a
                                        href="tel:+15552486699"
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={smoothTransition}
                                    />
                                }
                            >
                                <Phone className="size-4" data-icon="inline-start" />
                                Order Now
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-full border-orange-300 bg-white/70 text-stone-950 hover:bg-orange-100"
                                nativeButton={false}
                                render={
                                    <motion.a
                                        href="#menu"
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={smoothTransition}
                                    />
                                }
                            >
                                View Menu
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div className="relative mx-auto w-full max-w-xl" variants={fadeUp}>
                        <motion.div
                            className="absolute -right-6 -top-6 hidden rounded-full bg-orange-200 px-5 py-3 text-sm font-bold uppercase tracking-widest text-orange-950 shadow-lg sm:block"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            Fresh noodles daily
                        </motion.div>
                        <motion.div
                            className="rounded-3xl border border-orange-200 bg-white p-4 shadow-2xl shadow-orange-950/15"
                            whileHover={{ rotate: -0.6, scale: 1.01 }}
                            transition={smoothTransition}
                        >
                            <div className="rounded-[1.35rem] bg-gradient-to-br from-stone-950 via-orange-950 to-red-900 p-6 text-white">
                                <div className="flex items-center justify-between text-sm uppercase tracking-widest text-orange-100">
                                    <span>Signature Bowl</span>
                                    <motion.span animate={{ rotate: [0, 8, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                                        <Utensils className="size-5" />
                                    </motion.span>
                                </div>
                                <div className="mt-8 rounded-full bg-orange-100 p-5 shadow-inner shadow-orange-950/30">
                                    <div className="rounded-full bg-red-900 p-5">
                                        <motion.div
                                            className="relative aspect-square rounded-full bg-[radial-gradient(circle_at_42%_34%,#fed7aa_0_11%,transparent_12%),radial-gradient(circle_at_62%_44%,#facc15_0_9%,transparent_10%),radial-gradient(circle_at_50%_54%,#f97316_0_34%,#7f1d1d_35%_100%)] shadow-2xl"
                                            animate={{ scale: [1, 1.025, 1] }}
                                            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <motion.div className="absolute left-[18%] top-[28%] h-3 w-[64%] rounded-full bg-orange-200" animate={{ x: [0, 6, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }} />
                                            <motion.div className="absolute left-[23%] top-[43%] h-3 w-[52%] rounded-full bg-orange-200" animate={{ x: [0, -5, 0] }} transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }} />
                                            <motion.div className="absolute bottom-[20%] left-[28%] h-10 w-24 rounded-full bg-stone-100/95" animate={{ y: [0, -3, 0] }} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }} />
                                        </motion.div>
                                    </div>
                                </div>
                                <motion.div className="mt-6 grid grid-cols-3 gap-3 text-center" variants={staggerGroup} initial="hidden" animate="visible">
                                    {["24 hr broth", "8 bowls", "11-10 daily"].map((item) => (
                                        <motion.div key={item} className="rounded-2xl bg-white/10 px-3 py-4 text-sm font-semibold" variants={fadeUp}>
                                            {item}
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>

            <motion.section
                id="menu"
                className="bg-white py-16 sm:py-20"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
            >
                <motion.div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" variants={staggerGroup}>
                    <motion.div className="max-w-2xl" variants={staggerGroup}>
                        <motion.div variants={fadeUp}>
                            <Badge className="text-orange-700">
                                <Soup className="size-3" />
                                Menu
                            </Badge>
                        </motion.div>
                        <motion.h2 className="mt-4 font-heading text-4xl font-bold text-stone-950 sm:text-5xl" variants={fadeUp}>
                            Eight reasons to bring your appetite.
                        </motion.h2>
                        <motion.p className="mt-4 text-base leading-7 text-stone-700" variants={fadeUp}>
                            Choose a steamy noodle bowl or round out the table with crispy sides and a cool matcha finish.
                        </motion.p>
                    </motion.div>

                    <Tabs defaultValue="all" className="mt-10">
                        <TabsList className="w-full justify-start overflow-x-auto rounded-full bg-orange-100 p-1 sm:w-fit">
                            <TabsTrigger className="rounded-full data-active:bg-white" value="all">
                                All Items
                            </TabsTrigger>
                            <TabsTrigger className="rounded-full data-active:bg-white" value="ramen">
                                Ramen Bowls
                            </TabsTrigger>
                            <TabsTrigger className="rounded-full data-active:bg-white" value="sides">
                                Sides & Sweet
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="all" className="mt-6">
                            <MenuGrid items={menuItems} />
                        </TabsContent>
                        <TabsContent value="ramen" className="mt-6">
                            <MenuGrid items={ramenItems} />
                        </TabsContent>
                        <TabsContent value="sides" className="mt-6">
                            <MenuGrid items={sidesItems} />
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </motion.section>

            <motion.section
                id="location"
                className="bg-orange-50 py-16 sm:py-20"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
            >
                <motion.div
                    className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8"
                    variants={staggerGroup}
                >
                    <motion.div
                        className="rounded-3xl border border-orange-200 bg-white p-6 shadow-sm sm:p-8"
                        variants={fadeUp}
                        whileHover={{ y: -4 }}
                        transition={smoothTransition}
                    >
                        <motion.div variants={fadeUp}>
                            <Badge className="text-orange-700">
                                <MapPin className="size-3" />
                                Location
                            </Badge>
                        </motion.div>
                        <motion.h2 className="mt-4 font-heading text-4xl font-bold text-stone-950" variants={fadeUp}>
                            Find us near the downtown lunch rush.
                        </motion.h2>
                        <motion.div variants={fadeUp}>
                            <Separator className="my-6 bg-orange-200" />
                        </motion.div>
                        <motion.div className="space-y-5 text-stone-700" variants={staggerGroup}>
                            <motion.p className="text-lg font-semibold text-stone-950" variants={fadeUp}>Noodle Theory</motion.p>
                            <motion.p variants={fadeUp}>128 Broth Street<br />Dallas, TX 75201</motion.p>
                            <motion.p variants={fadeUp}>Counter service, fast pickup, and cozy tables for quick ramen nights.</motion.p>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={fadeUp} whileHover={{ scale: 1.01 }} transition={smoothTransition}>
                        <Card className="rounded-3xl border border-orange-200 bg-white p-3 shadow-sm">
                            <AspectRatio ratio={16 / 10} className="overflow-hidden rounded-[1.25rem] bg-orange-100">
                                <iframe
                                    title="Map showing downtown Dallas near Noodle Theory"
                                    src="https://www.openstreetmap.org/export/embed.html?bbox=-96.8038%2C32.7761%2C-96.7917%2C32.7847&layer=mapnik&marker=32.7804%2C-96.7977"
                                    className="absolute inset-0 h-full w-full border-0"
                                    loading="lazy"
                                />
                            </AspectRatio>
                        </Card>
                    </motion.div>
                </motion.div>
            </motion.section>

            <motion.section
                id="contact"
                className="bg-stone-950 py-16 text-white sm:py-20"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.24 }}
            >
                <motion.div
                    className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8"
                    variants={staggerGroup}
                >
                    <motion.div variants={staggerGroup}>
                        <motion.div variants={fadeUp}>
                            <Badge className="text-orange-300">
                                <Flame className="size-3" />
                                Open Daily
                            </Badge>
                        </motion.div>
                        <motion.h2 className="mt-4 max-w-3xl font-heading text-4xl font-bold sm:text-5xl" variants={fadeUp}>
                            Your next bowl is simmering.
                        </motion.h2>
                        <motion.div className="mt-8 grid gap-4 sm:grid-cols-2" variants={staggerGroup}>
                            <motion.div
                                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                                variants={fadeUp}
                                whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.08)" }}
                                transition={smoothTransition}
                            >
                                <Clock className="size-5 text-orange-300" />
                                <span>11:00 AM - 10:00 PM</span>
                            </motion.div>
                            <motion.div
                                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                                variants={fadeUp}
                                whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.08)" }}
                                transition={smoothTransition}
                            >
                                <Phone className="size-5 text-orange-300" />
                                <span>(555) 248-6699</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <Button
                            size="lg"
                            className="w-full rounded-full bg-orange-500 text-white hover:bg-orange-400 sm:w-auto"
                            nativeButton={false}
                            render={
                                <motion.a
                                    href="tel:+15552486699"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={smoothTransition}
                                />
                            }
                        >
                            Order Now
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.section>
        </motion.main>
    )
}

"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const handleClick = () => {
    window.open("https://www.fullstacksherpa.tech/", "_blank");
  };

  return (
    <footer className="pt-12 pb-6">
      <MaxWidthWrapper>
        <div className="border-t border-gray-300 w-[80%] mx-auto pb-6" />

        <div className="h-full flex flex-col gap-2 md:flex-row md:justify-between justify-center items-center">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              <span className="dark:hover:text-white hover:text-purple-900 hover:underline">
                KHEL &copy;
              </span>{" "}
              {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Website developed by{" "}
              <span
                onClick={handleClick}
                className="dark:text-white underline hover:text-purple-900 underline-offset-4 cursor-pointer">
                fullstacksherpa
              </span>
            </p>
          </div>

          {/* Right - Drawer Links */}
          <div className="flex items-center justify-center">
            <div className="flex space-x-6 text-sm text-muted-foreground">
              {/* Terms Drawer */}
              <Drawer>
                <DrawerTrigger asChild>
                  <button className="hover:text-gray-600">Terms</button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Terms & Conditions</DrawerTitle>
                    <DrawerDescription>
                      📜 KHEL Terms & Services 1. Introduction Welcome to KHEL, a community-driven
                      sports platform that helps you find and join games, book venues, and connect
                      with players in your area. By using the app, you agree to these Terms &
                      Services. Please read them carefully. 2. For All Users a. Game Discovery &
                      Participation KHEL allows users to find and join open games hosted by others
                      in their area. You are free to join any open game, but please note that the
                      game creator (admin) has the authority to accept or reject participants for
                      any reason, including capacity or team balance. b. Game Creation Users can
                      create their own games and become the game admin. As a game admin, you will
                      have sudo-level control, including the ability to approve or remove players,
                      modify game details, and cancel the game if needed. c. Game Attendance &
                      Responsibility If you can’t attend a game you’ve joined, you must inform the
                      venue owner or game admin in advance, so that your spot can be offered to
                      others. Repeated no-shows may result in limited access to future games. 3. For
                      Venue Owners a. Venue Registration You can register your sports venue on the
                      KHEL platform to host and manage games. We expect a modest service fee, which
                      helps us cover: - Server and database costs - Ongoing app support and
                      development - Platform improvements and marketing b. Venue Responsibilities
                      Venue owners are responsible for keeping their schedules accurate and ensuring
                      that the facility is ready for bookings. You must respond to booking inquiries
                      promptly and mark time slots as unavailable when needed to avoid confusion or
                      double bookings. 4. Code of Conduct We expect all users — players and venue
                      owners — to act respectfully and responsibly while using the platform. This
                      includes: - Being punctual and courteous to other players and staff -
                      Maintaining clean and safe environments during games - Avoiding abusive
                      behavior or harassment of any kind 5. Fees & Payments Joining most games is
                      free, unless specified otherwise by the game admin or venue. For premium
                      features, exclusive games, or venue listings, payment may be required, and
                      will be transparently communicated through the app. 6. Cancellation and
                      Refunds Refund policies (if applicable) are determined by the venue owner or
                      game admin. KHEL is not directly responsible for refunds, but we will assist
                      in dispute resolution where possible. 7. Platform Limitations While we strive
                      for reliability, KHEL does not guarantee uninterrupted access to the app or
                      any specific games or venues. We are not liable for any injuries, damages, or
                      losses incurred during gameplay or at venues. 8. Changes to Terms We may
                      update these Terms & Services periodically to reflect changes in our app or
                      policies. Continued use of the platform means you accept the latest version of
                      these terms. 9. Contact For support, feedback, or questions, email us at
                      fullstacksherpa@gmail.com
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>

              {/* Privacy Drawer */}
              <Drawer>
                <DrawerTrigger asChild>
                  <button className="hover:text-gray-600">Privacy Policy</button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Privacy Policy</DrawerTitle>
                    <DrawerDescription>
                      We respect your privacy. KHEL collects only the essential information required
                      to provide our services. We never share your data with third parties without
                      your explicit consent. All sensitive data (such as authentication tokens and
                      user identifiers) is securely handled and encrypted using industry-standard
                      algorithms, including SHA-based encryption methods. When you book a venue, the
                      venue owner will be able to see your phone number. This is necessary for our
                      feature that allows them to contact you directly in case of schedule changes
                      or confirmations. We are committed to safeguarding your personal information
                      and continuously improving our data protection practices.
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>

              {/* Cookie Policy Drawer */}
              <Drawer>
                <DrawerTrigger asChild>
                  <button className="hover:text-gray-600">Cookie Policy</button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Cookie Policy</DrawerTitle>
                    <DrawerDescription>
                      We use cookies to enhance your experience. You can control cookies through
                      your browser settings. By continuing, you accept our use of cookies.
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;

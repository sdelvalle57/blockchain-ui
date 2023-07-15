import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Button, Stack } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface PageProps {
  children: ReactNode;
}


export default function Layout(props: PageProps) {
  let content = (
    <div id="reserv-layout" className="w-full light">
      {props.children}
    </div>
  );
  return web3Connect(content);
}

const web3Connect = (content: ReactNode) => {
  return (
    <div>
      <Header />
      <Stack spacing="8">
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "0", sm: "10" }}
          bg={{ base: "#f1f3f4", sm: "bg-surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="12">
            <Stack spacing="6">
              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
                }) => {
                  const ready = mounted && authenticationStatus !== "loading";
                  const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                      authenticationStatus === "authenticated");

                  return (
                    <div
                      {...(!ready && {
                        "aria-hidden": true,
                        style: {
                          opacity: 0,
                          pointerEvents: "none",
                          userSelect: "none",
                        },
                      })}
                    >
                      {(() => {
                        if (!connected) {
                          return (
                            <Button
                              className="chakra-button css-1058v6w"
                              onClick={openConnectModal}
                              type="button"
                            >
                              Connect Wallet
                            </Button>
                          );
                        }
                        if (chain.unsupported) {
                          return (
                            <Button
                              className="chakra-button css-1058v6w"
                              onClick={openChainModal}
                              type="button"
                            >
                              Switch Network
                            </Button>
                          );
                        }
                        return content;
                      })()}
                    </div>
                  );
                }}
              </ConnectButton.Custom>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Footer />
    </div>
  );
}

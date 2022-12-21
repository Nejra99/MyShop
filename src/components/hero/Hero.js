import React from "react";
import { Box, Typography } from "@mui/material";
import HeroImage from "../../images/HeroImage.png";

const Hero = () => {
    return (
        <Box>
            <Box
                sx={{
                    backgroundImage: `url(${HeroImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "black",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: 600,
                    position: "center",
                    width: "100%",
                    display: "flex",

                    justifyContent: "center",
                }}
            >
                <Box sx={{ padding: 20, width: "40%" }}>
                    <Box
                        sx={{
                            background: "white",
                            opacity: "0.8",
                        }}
                    >
                        <Typography
                            variant={"h6"}
                            color="#800080"
                            align="center"
                            pt={8}
                        >
                            Trending Styles
                        </Typography>
                        <Typography variant="h4" align="center">
                            Life is Boring Without Fashion
                        </Typography>
                        <Typography variant="body1" align="center" pb={8}>
                            be unique
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
export default Hero;

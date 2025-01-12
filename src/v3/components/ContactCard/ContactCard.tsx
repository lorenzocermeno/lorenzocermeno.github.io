import styled from "@emotion/styled";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";
interface IProps { title: string; description: string; href: string, img?: ReactNode; };

const StyledImageDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`;

const StyledTextDiv = styled.div`
  display: flex;
  flex-direction: column;
    align-items: center;
`;

export const ContactCard = (props: IProps): JSX.Element => {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: "13em", borderRadius: '2rem', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                <CardActionArea>
                    <StyledImageDiv>
                        {props.img}
                    </StyledImageDiv>
                    <CardContent>
                        <StyledTextDiv>
                            <Typography variant="h5" component="div" sx={{ color: "white" }}>
                                {props.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "white" }}>
                                {props.description}
                            </Typography>
                        </StyledTextDiv>
                    </CardContent>
                </CardActionArea>
            </Card>
        </a>
    )
};
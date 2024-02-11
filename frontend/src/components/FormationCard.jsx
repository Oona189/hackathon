import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import './components.css'


const FormationCard = (props) => {
    return (
        <Card className="card border-[0.5px] border-gray-200 w-full h-[250px] items-center max-w-[100rem] flex-row m-auto">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 h-full shrink-0 rounded-r-none"
            >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody className='w-full'>
                <Typography variant="h6" color="gray" className="mb-2 uppercase text-gray-600 ">
                    {props.formation.genre}
                </Typography>
                <div className="mb-3 flex items-center justify-between">
                    <Typography variant="h4" color="blue" className="mb-2">
                        {props.formation.objet}
                    </Typography>
                    <Typography
                        color="blue-gray"
                        className="mr-5 flex items-center gap-1.5 font-normal "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                            />
                        </svg>
                        5
                    </Typography>
                </div>
                <Typography color="gray" className="mb-2 font-normal">
                    {props.formation.notes.substring(0,200)+ "..."}
                </Typography>
                <div className="mb-3 flex items-center justify-between">
                    <Typography className="font-normal">{props.formation.datedebut.substring(0, 10)+" / " + props.formation.datefin.substring(0, 10)}</Typography>
                    <a href="#" className="inline-block">
                        <Button variant="text" className="flex items-center gap-2">
                            Voir Plus
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                    </a>
                </div>

            </CardBody>
        </Card>
    )
}

export default FormationCard
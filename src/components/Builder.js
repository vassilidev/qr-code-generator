import React, {useState} from 'react';
import {Form, FormControl} from "react-bootstrap";

const Builder = () => {
    const [size, setSize] = useState(400);
    const [fill, setFill] = useState("#333333");
    const [background, setBackground] = useState("#ffffff");
    const [content, setContent] = useState("https://github.com/vassilidev/qr-code-generator");
    const [minVersion, setMinVersion] = useState(6);
    const [errorCorrection, setErrorCorrection] = useState("H");
    const [quiteZone, setQuiteZone] = useState(1);
    const [cornerRadius, setCornerRadius] = useState(50);

    return (
        <Form>
            <Form.Group className="mb-3" controlId="size">
                <Form.Label>Size: {size + 'px'}</Form.Label>
                <FormControl
                    type="range"
                    value={size}
                    min={100}
                    max={1000}
                    step={25}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-100"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="fillColor">
                <Form.Label>Fill color</Form.Label>
                <FormControl
                    type="color"
                    value={fill}
                    onChange={(e) => setFill(e.target.value)}
                    className="w-100"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="backgroundColor">
                <Form.Label>Background color</Form.Label>
                <FormControl
                    type="color"
                    value={background}
                    onChange={(e) => setBackground(e.target.value)}
                    className="w-100"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="content">
                <Form.Label>Content</Form.Label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="form-control w-100"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="size">
                <Form.Label>Min Version: {minVersion}</Form.Label>
                <FormControl
                    type="range"
                    value={minVersion}
                    min={1}
                    max={10}
                    step={1}
                    onChange={(e) => setMinVersion(e.target.value)}
                    className="w-100"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="size">
                <Form.Label>Error correction: {errorCorrection}</Form.Label>
                <select
                    value={errorCorrection}
                    onChange={(e) => setErrorCorrection(e.target.value)}
                    className="form-control w-100">
                    <option value="L">L - Low (7%)</option>
                    <option value="M">M - Medium (15%)</option>
                    <option value="Q">Q - Quartile (25%)</option>
                    <option value="H">H - High (30%)</option>
                </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="size">
                <Form.Label>Quiet Zone: {quiteZone} modules</Form.Label>
                <FormControl
                    type="range"
                    value={quiteZone}
                    min={0}
                    max={4}
                    step={1}
                    onChange={(e) => setQuiteZone(e.target.value)}
                    className="w-100"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="size">
                <Form.Label>Corner radius: {cornerRadius + '%'}</Form.Label>
                <FormControl
                    type="range"
                    value={cornerRadius}
                    min={0}
                    max={50}
                    step={5}
                    onChange={(e) => setCornerRadius(e.target.value)}
                    className="w-100"/>
            </Form.Group>
        </Form>
    );
};

export default Builder;

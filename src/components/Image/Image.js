import { useState, forwardRef } from 'react';

import images from '@/assets/images';

function Image({ src, alt, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(images.default_image);
    };

    return <img ref={ref} src={fallBack || src} alt={alt} {...props} onError={handleError} />;
}

export default forwardRef(Image);

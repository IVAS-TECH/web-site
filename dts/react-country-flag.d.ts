declare module 'react-country-flag' {
    declare const Flag: React.ComponentClass<{
        countryCode: string,
        svg?: boolean,
        style: React.CSSProperties
    }>;

    export default Flag;
};
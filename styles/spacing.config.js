// @ts-nocheck

const margin = value => ({
    margin: value
});

const marginY = value => ({
    marginTop: value,
    marginBottom: value
});

const marginX = value => ({
    marginLeft: value,
    marginRight: value
});

const padding = value => ({
    padding: value
});

const paddingY = value => ({
    paddingTop: value,
    paddingBottom: value
});

const paddingX = value => ({
    paddingLeft: value,
    paddingRight: value
});

const spacings = {
    m: margin,
    mx: marginX,
    marginX,
    my: marginY,
    marginY,
    p: padding,
    px: paddingX,
    paddingX,
    py: paddingY,
    paddingY
};

export default spacings;
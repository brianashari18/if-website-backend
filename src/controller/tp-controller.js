import tpService from "../service/tp-service.js";

const upload = async (req, res, next) => {
    try {
        const result = await tpService.upload(req.body);
        res.status(200).json({
            code: 200,
            status: 'OK',
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const update = async (req, res, next) => {
    try {
        const result = await tpService.update(req);
        res.status(200).json({
            code: 200,
            status: 'OK',
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const get = async (req, res, next) => {
    try {
        const result = await tpService.get(req);
        res.status(200).json({
            code: 200,
            status: 'OK',
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const remove = async (req, res, next) => {
    try {
        const result = await tpService.remove(req);
        res.status(200).json({
            code: 200,
            status: 'OK'
        });
    } catch (e) {
        next(e);
    }
}

export default {
    upload, update, get, remove
}
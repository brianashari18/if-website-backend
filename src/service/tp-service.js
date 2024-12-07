import {prismaClient} from "../application/database.js";
import {ResponseError} from "../error/response-error.js";
import {request} from "express";
import {NotFoundError} from "../error/not-found-error.js";

const upload = async (request) => {
    const tp = request;

    tp.createdAt = new Date();

    return prismaClient.tP.create({
        data: request,
        select: {
            id: true,
            judul: true,
            subJudul: true,
            kategori: true,
            deskripsi: true,
            deadline: true,
            createdAt: true
        }
    })
}

const update = async (request) => {
    const tp = request.body;
    const reqParams = request.params;
    const id = parseInt(reqParams.tpId, 10);

    const isExists = prismaClient.tP.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            judul: true,
            subJudul: true,
            kategori: true,
            deskripsi: true,
            deadline: true
        }
    })

    if (!isExists) {
        throw new NotFoundError(404, "Tp not found");
    }

    return prismaClient.tP.update({
        where: {
            id: id
        },
        data: tp,
        select: {
            id: true,
            judul: true,
            subJudul: true,
            kategori: true,
            deskripsi: true,
            deadline: true,
            createdAt: true
        }
    })
}

const get = async (request) => {
    const tp = request.body;
    const reqParams = request.params;
    const id = parseInt(reqParams.tpId, 10);

    const isExists = prismaClient.tP.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            judul: true,
            subJudul: true,
            kategori: true,
            deskripsi: true,
            deadline: true,
            createdAt: true
        }
    })

    if (!isExists) {
        throw new NotFoundError(404, "Tp not found");
    }

    return isExists;
}

const remove = async (request) => {
    const tp = request.body;
    const reqParams = request.params;
    const id = parseInt(reqParams.tpId, 10);

    const isExists = prismaClient.tP.findUnique({
        where: {
            id: id
        }
    })

    if (!isExists) {
        throw new NotFoundError(404, "Tp not found");
    }

    return prismaClient.tP.delete({
        where: {
            id: id
        }
    });
}

export default {
    upload, update, get, remove
}

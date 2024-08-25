import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Album, AlbumDocument } from './schemas/album.schema';
import { Model } from 'mongoose';
import { Song } from 'src/songs/schemas/song';
import { CreateAlbumDTO } from './dto/create-album-dto';

@Injectable()
export class AlbumsService {
    constructor(
        @InjectModel(Album.name)
        private readonly albumModel: Model<AlbumDocument>
    ) {}

    async create(createAlbumDTO: CreateAlbumDTO): Promise<Album> {
        return this.albumModel.create(createAlbumDTO)
    }

    async find(): Promise<Album[]> {
        return this.albumModel.find().populate("songs", "-album -__v", Song.name)
    }

    async findById(id: string): Promise<Album> {
        return this.albumModel.findById(id).populate("songs", "-album -__v", Song.name)
    }
}

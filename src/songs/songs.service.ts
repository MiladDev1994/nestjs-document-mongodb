import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Song, SongDocument } from './schemas/song';
import { Model } from 'mongoose';
import { CreateSongDTO } from './dto/create-song-dto';

@Injectable()
export class SongsService {
    constructor(
        @InjectModel(Song.name)
        private readonly songModule: Model<SongDocument>
    ) {}

    async create(createSongDTO: CreateSongDTO): Promise<Song> {
        const song = await this.songModule.create(createSongDTO)
        return song
    }

    async find(): Promise<Song[]> {
        return this.songModule.find()
    }

    async findById(id: string): Promise<Song> {
        return this.songModule.findById(id)
    }

    async delete(id: string) {
        return this.songModule.deleteOne({ _id: id })
    }
}

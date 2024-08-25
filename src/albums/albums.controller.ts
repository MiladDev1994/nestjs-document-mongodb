import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumDTO } from './dto/create-album-dto';
import { Album } from './schemas/album.schema';

@Controller('albums')
export class AlbumsController {

    constructor(
        private albumService: AlbumsService
    ) {}

    @Post()
    create(
        @Body()
        albumCreateDTO: CreateAlbumDTO
    ): Promise<Album> {
        return this.albumService.create(albumCreateDTO)
    }

    @Get()
    find(): Promise<Album[]> {
        return this.albumService.find()
    }

    @Get(":id")
    findById(
        @Param("id")
        id: string
    ): Promise<Album> {
        return this.albumService.findById(id)
    }
}

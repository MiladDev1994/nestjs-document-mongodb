// اتصال نست به مونگو
// نصب پکیج های
    // @nestjs/mongoose
    // mongoose


    
// برای اتصال به مونگو این تغییرات رو در فایل app.module.ts میدیم

    // @Module({
    //     imports: [MongooseModule.forRoot("mongodb://localhost:27017/nest_doc")],
    //     controllers: [AppController],
    //     providers: [AppService],
    // })


// ساخت مدل اولیه برای songs
    // import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
    // import { HydratedDocument } from "mongoose";

    // export type SongDocument = HydratedDocument<Song>

    // @Schema()
    // export class Song {

    //     @Prop({
    //         required: true
    //     })
    //     title: string

    //     @Prop({
    //         required: true
    //     })
    //     releasedDate: Date

    //     @Prop({
    //         required: true
    //     })
    //     duration: string

    //     lyrics: string
    // }

    // export const SongSchema = SchemaFactory.createForClass(Song)



// برای ساختار اطلاعات هم یه dto میخوایم 
    // export class CreateSongDTO {
    //     title: string;
    //     releasedDate: Date;
    //     duration: Date;
    //     lyrics: string;
    // }




    // ماژول برای اتصال به تیبل مربوطه
        // @Module({
        //     imports: [MongooseModule.forFeature([{ name: Song.name, schema: SongSchema }])],
        //     controllers: [SongsController],
        //     providers: [SongsService]
        // })
        // export class SongsModule {}





// اینزرت کردن دیتا
    // کنترلر
        // @Controller('songs')
        // export class SongsController {
        //     constructor(
        //         private songService: SongsService
        //     ) {}

        //     @Post()
        //     create (
        //         @Body()
        //         createSongDTO: CreateSongDTO
        //     ) {
        //         return this.songService.create(createSongDTO)
        //     }
        // }

        
    // سرویس
        // @Injectable()
        // export class SongsService {
        //     constructor(
        //         @InjectModel(Song.name)
        //         private readonly songModule: Model<SongDocument>
        //     ) {}

        //     async create(createSongDTO: CreateSongDTO): Promise<Song> {
        //         const song = await this.songModule.create(createSongDTO)
        //         return song
        //     }
        // }




// findAll
    // کنترلر
        // @Get()
        // find():Promise<Song[]> {
        //     return this.songService.find()
        // }

    //  سرویس
        // async find() {
        //     return this.songModule.find()
        // }




// findById
    // کنترلر
        // @Get(":id")
        // findById(
        //     @Param("id") // برای دی استراکچر کردن id
        //     id: string
        // ):Promise<Song> {
        //     console.log(id);
        //     return this.songService.findById(id)
        // }

    //  سرویس
        // async findById(id: string) {
        //     return this.songModule.findById(id)
        // }
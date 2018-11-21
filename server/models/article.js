import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title:       { type: String, required: [true, "can't be blank"] },
  tags:        { type: Array,  default: [] },
  description: { type: String, default: '' },
  body:      { type: String, required: [true, "can't be blank"] },
  owner:     { type: Schema.Types.ObjectId, ref: 'User', required: [true, "Can't be blank"], index: true },
  author:    { type: Schema.Types.ObjectId, ref: 'User' },
  isRetweet: { type: Boolean, default: false },
  images:    [{ type: String }],
  comments:  [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  likes:     [{ type: Schema.Types.ObjectId, ref: 'User'    }],
  favorites: [{ type: Schema.Types.ObjectId, ref: 'User'    }]
}, {
  timestamps: true,
  collection: 'articles'
});

ArticleSchema.pre('validate', function(next){
  if(!this.slug) this.slugify();
  next();
});

class ArticleClass {
  slugify() {
    this.slug = slug(this.title) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
  }

  async updateFavoriteCount() {
    const count = await User.count({favorites: {$in: [article._id]}});
    this.favoritesCount = count;
    return await this.save();
  };

  toJSONFor(user) {
    return {
      slug: this.slug,
      title: this.title,
      description: this.description,
      body: this.body,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      tagList: this.tagList,
      favorited: user ? user.isFavorite(this._id) : false,
      favoritesCount: this.favoritesCount,
      author: this.author.toJSONFor(user)
    };
  }
}

ArticleSchema.loadClass(ArticleClass);

export default mongoose.model('Article', ArticleSchema);


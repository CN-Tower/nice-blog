import mongoose from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import config from 'config-lite';
import fn from 'funclib';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username:  { type: String,  required: [true, "Can't be blank"], unique: true, trim: true, index: true },
  email:     { type: String,  required: [true, "Can't be blank"], unique: true, trim: true, index: true },
  phoneNb:   { type: String,  unique: true, trim: true },
  avater:    { type: String,  default: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
  address:   { type: String,  default: ''   },
  company:   { type: String,  default: ''   },
  webset:    { type: String,  default: ''   },
  bio:       { type: String,  default: ''   },
  webset:    { type: String,  default: ''   },
  articles:  [{ type: Schema.Types.ObjectId, ref: 'Article' }],
  favorites: [{ type: Schema.Types.ObjectId, ref: 'Article' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User'    }],
  following: [{ type: Schema.Types.ObjectId, ref: 'User'    }],
  comments:  [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  replies:   { type: Array,   default: []   },
  messages:  { type: Array,   default: []   },
  activity:  { type: Number,  default: 0    },
  userType:  { type: Number,  default: 1    },
  isforbid:  { type: Boolean, default: false},
  salt: String,
  hash: String,
}, {
  timestamps: true,
  collection: 'users'
});

class UserClass {

  async validPassword(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 18, 'sha512').toString('hex');
    return this.hash === hash;
  }

  async setPassword(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 18, 'sha512').toString('hex');
  }

  async generateJWT() {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    return jwt.sign({
      id: this._id,
      username: this.username,
      exp: parseInt(exp.getTime() / 1000),
    }, config.secret);
  }

  async favorite(id) {
    if (!this.favorites.includes(id)) this.favorites.push(id);
    return this.save();
  }

  async unfavorite(id) {
    this.favorites.remove(id);
    return await this.save();
  }

  async isFavorite(id) {
    return this.favorites.some(favoriteId => favoriteId.toString() === id.toString());
  }

  async follow(id) {
    if (!this.following.includes(id)) this.following.push(id);
    return this.save();
  }

  async unfollow(id) {
    this.following.remove(id);
    return await this.save();
  }

  async isFollowing(id) {
    return this.following.some(followId => followId.toString() === id.toString());
  }

  toJSON() {
    return {
      id: this._id,
      bio: this.bio,
      username: this.username,
      avater: this.avater
    };
  }

  toProfileJSON() {
    return fn.extend(this.toJSON(), {
      username: this.username,
      email: this.email,
      token: this.generateJWT()
    });
  }

  toJSONFor(user) {
    fn.extend(this.toJSON(), {
      following: user ? user.isFollowing(this._id) : false
    });
  }

}

UserSchema.loadClass(UserClass);

export default mongoose.model('User', UserSchema);

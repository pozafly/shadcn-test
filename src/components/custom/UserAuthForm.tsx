import { Icons } from '../common/Icons';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export default function UserAuthForm() {
  return (
    <div className="gap-6 space-y-5">
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoComplete="email"
              autoCapitalize="none"
            />
          </div>
          <Button>Sign In with Email</Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" className="w-full">
        <Icons.gitHub className="mr-2 h-4 w-4" /> GitHub
      </Button>
    </div>
  );
}

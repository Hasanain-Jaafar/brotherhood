"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { updateProfile } from "@/app/[locale]/(dashboard)/profile/actions";
import { profileSchema, type ProfileInput } from "@/lib/validations/profile";
import { AvatarUpload } from "@/components/profile/avatar-upload";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";

type ProfileFormProps = {
  userId: string;
  email: string | undefined;
  initialName: string | null;
  initialAvatarUrl: string | null;
};

export function ProfileForm({
  userId,
  email,
  initialName,
  initialAvatarUrl,
}: ProfileFormProps) {
  const router = useRouter();
  const t = useTranslations("profile");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(initialAvatarUrl);

  const form = useForm<ProfileInput>({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: initialName ?? "" },
  });

  const name = useWatch({ control: form.control, name: "name" });

  async function onSubmit(values: ProfileInput) {
    const result = await updateProfile({
      ...values,
      avatar_url: avatarUrl,
    });
    if (result.success) {
      toast.success(t("updated"));
      router.push(`/u/${userId}`);
    } else {
      toast.error(result.error);
    }
  }

  return (
    <Card className="rounded-2xl">
      <CardHeader className="px-6 py-5">
        <CardTitle>{t("cardTitle")}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 px-6 pb-6">
        <AvatarUpload
          userId={userId}
          avatarUrl={avatarUrl}
          name={name || initialName}
          email={email}
          onUploadComplete={(url) => setAvatarUrl(url || null)}
        />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground flex items-center gap-2">
                <User className="size-4" />
                {t("basicInfo")}
              </h3>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("name")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("namePlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" disabled={form.formState.isSubmitting} className="rounded-full">
              {form.formState.isSubmitting && <Spinner />}
              {form.formState.isSubmitting ? t("saving") : t("save")}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
